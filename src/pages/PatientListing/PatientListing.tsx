// export default PatientListing;
import { useEffect, useState } from "react";
import { Upload, Trash2, Trash, Eye, ArrowLeft, Search } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import moment from 'moment';

interface Patient {
  _id: string;
  name: string;
  phone: string;
  sex: string;
  age: number;
  role: {
    _id: string;
    name: string;
    createdAt: string;
  };
  report: string[]; // Array of file URLs
}

interface Role {
  _id: string;
  name: string;
}

const PatientListing = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const navigate = useNavigate();

  const [roles, setRoles] = useState<Role[]>([]);

  const formatDate = (dateString: string) => {
    return moment(dateString).utc().format('DD MMMM YYYY'); // Output: "05 April 2025"
  };

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_HOST}/api/auth/list`
      );
      console.log("Fetched data:", response.data); // Debug log
      setPatients(response.data.data);
    } catch (error) {
      console.error("Failed to fetch patients:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_HOST}/api/role/all`
        );
        setRoles(response.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };

    fetchRoles();
  }, []);

  const handleDeleteReport = (patientId: string, index: number) => {
    const patient = patients.find((p) => p._id === patientId);
    if (!patient) return;

    const reportToDelete = patient.report[index];
    if (!reportToDelete) return;

    // Update frontend state first (optimistic UI)
    setPatients((prev) =>
      prev.map((p) =>
        p._id === patientId
          ? { ...p, report: p.report.filter((_, i) => i !== index) }
          : p
      )
    );

    // Make backend API call to actually delete the report
    axios
      .post(`${import.meta.env.VITE_API_HOST}/api/auth/delete/${patientId}`, {
        report: reportToDelete,
      })
      .then(() => {
        console.log("Report deleted successfully");
      })
      .catch((err) => {
        console.error("Error deleting report:", err);
        // Optionally: rollback frontend change if API fails
      });
  };

  const handleUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    patientId: string
  ) => {
    const files = e.target.files;
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("report", file); // ✅ match the field name used in multer
    });

    axios
      .post(
        `${import.meta.env.VITE_API_HOST}/api/auth/report/${patientId}`,
        formData
      )
      .then((_res) => {
        fetchPatients(); // refresh list after upload
      })
      .catch((err) => {
        console.error("Upload error", err);
      });
  };

  const handleDeletePatient = (patientId: string) => {
    // Optimistically update the UI
    setPatients((prev) => prev.filter((p) => p._id !== patientId));

    axios
      .delete(`${import.meta.env.VITE_API_HOST}/api/auth/user/${patientId}`)
      .then(() => {
        console.log("User deleted successfully");
      })
      .catch((err) => {
        console.error("Error deleting user:", err);
      });
  };

  const handleRoleChange = async (patientId: string, roleId: string) => {
    try {
      await axios.patch(
        `${import.meta.env.VITE_API_HOST}/api/auth/user/${patientId}`,
        {
          role: roleId, // Send role ID instead of role name
        }
      );

      setPatients((prev) =>
        prev.map((p) =>
          p._id === patientId
            ? {
                ...p,
                role: {
                  _id: roleId,
                  createdAt: p.role.createdAt,
                  name:
                    roles.find((role) => role._id === roleId)?.name ||
                    p.role.name,
                },
              }
            : p
        )
      );
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };

  // Filter patients
  const filteredPatients =
    patients?.filter(
      (patient) =>
        patient?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        patient?.phone?.includes(searchQuery)
    ) || [];

  // Get current page data
  const paginatedPatients = filteredPatients.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  console.log("Filtered patients:", filteredPatients.length); // Debug log
  console.log("Current page patients:", paginatedPatients.length); // Debug log

  return (
    <section className="py-12 sm:py-16 bg-white flex justify-center items-center mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Back Button */}
        <div className="hidden md:flex justify-start mb-8">
          <Button
            onClick={() => navigate("/admin-dashboard")}
            className="flex items-center gap-2 bg-primaryBlue text-white"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </Button>
        </div>

        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[2px] w-20 bg-darkGray"></div>
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Patient <span className="text-primaryBlue">Listing</span>
          </h2>
          <div className="h-[2px] w-20 bg-darkGray"></div>
        </div>

        {/* Search Bar */}
        <div className="mb-4 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by name or phone number"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryBlue"
          />
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-darkGray">
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center text-gray-500 py-6">
                Loading patients...
              </div>
            ) : paginatedPatients.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                No patients found.
              </div>
            ) : (
              <>
                <table className="w-full table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-100 text-gray-700">
                      <th className="text-left px-4 py-3">Name</th>
                      <th className="text-left px-4 py-3">Phone</th>
                      <th className="text-left px-4 py-3">Sex</th>
                      <th className="text-left px-4 py-3">Age</th>
                      <th className="text-left px-4 py-3">Date Added</th>
                      <th className="text-left px-4 py-3">Role</th>
                      <th className="text-left px-4 py-3">Reports</th>
                      <th className="text-center px-4 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedPatients.map((patient) => (
                      <tr
                        key={patient._id}
                        className="border-b hover:bg-gray-50"
                      >
                        <td className="px-4 py-3">{patient.name}</td>
                        <td className="px-4 py-3">{patient.phone}</td>
                        <td className="px-4 py-3 capitalize">{patient.sex}</td>
                        <td className="px-4 py-3">{patient.age}</td>
                        <td className="px-4 py-3">
                          {formatDate(patient.role.createdAt)}
                        </td>
                        <td className="px-4 py-3">
                          <select
                            value={patient?.role._id}
                            onChange={(e) =>
                              handleRoleChange(patient._id, e.target.value)
                            }
                            className="border border-gray-300 rounded p-1"
                          >
                            {roles.map((role) => (
                              <option key={role._id} value={role._id}>
                                {role.name}
                              </option>
                            ))}
                          </select>
                        </td>
                        <td className="px-4 py-3">
                          {patient?.report?.length === 0 ? (
                            <span className="text-gray-500">No Reports</span>
                          ) : (
                            <ul className="space-y-1">
                              {patient?.report?.map((url, index) => (
                                <li
                                  key={index}
                                  className="flex items-center justify-between text-sm"
                                >
                                  <a
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-blue-600 hover:underline"
                                  >
                                    <Eye className="w-4 h-4" />
                                    View Report {index + 1}
                                  </a>
                                  <button
                                    onClick={() =>
                                      handleDeleteReport(patient._id, index)
                                    }
                                    className="text-red-500 hover:text-red-700"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex justify-center items-center gap-2">
                            {/* Upload */}
                            <label
                              htmlFor={`file-upload-${patient._id}`}
                              className="bg-primaryBlue text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-secondaryBlue transition flex items-center gap-2"
                            >
                              <Upload className="w-4 h-4" />
                              Upload
                            </label>
                            <input
                              id={`file-upload-${patient._id}`}
                              type="file"
                              multiple
                              className="hidden"
                              accept=".pdf,.jpg,.jpeg,.png"
                              onChange={(e) => handleUpload(e, patient._id)}
                            />

                            {/* Delete */}
                            <button
                              onClick={() => handleDeletePatient(patient._id)}
                              className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-red-800 transition flex items-center gap-2"
                            >
                              <Trash className="w-4 h-4" />
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* Pagination */}
                <div className="flex items-center justify-between mt-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">
                      Rows per page:
                    </span>
                    <select
                      value={rowsPerPage}
                      onChange={(e) => {
                        setRowsPerPage(Number(e.target.value));
                        setPage(0);
                      }}
                      className="border border-gray-300 rounded p-1"
                    >
                      {[15, 25, 50].map((n) => (
                        <option key={n} value={n}>
                          {n}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-700">
                      {page * rowsPerPage + 1}-
                      {Math.min(
                        (page + 1) * rowsPerPage,
                        filteredPatients.length
                      )}{" "}
                      of {filteredPatients.length}
                    </span>
                    <div className="flex gap-1">
                      <button
                        onClick={() => setPage(page - 1)}
                        disabled={page === 0}
                        className="px-2 py-1 border rounded disabled:opacity-50"
                      >
                        Previous
                      </button>
                      <button
                        onClick={() => setPage(page + 1)}
                        disabled={
                          (page + 1) * rowsPerPage >= filteredPatients.length
                        }
                        className="px-2 py-1 border rounded disabled:opacity-50"
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientListing;
