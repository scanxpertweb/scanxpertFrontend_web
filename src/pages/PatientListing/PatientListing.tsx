// export default PatientListing;
import { useEffect, useState } from "react";
import { Upload, Trash2, Trash, Eye } from "lucide-react";
import axios from "axios";

interface Patient {
  _id: string;
  name: string;
  phone: string;
  sex: string;
  age: number;
  role: {
    _id:string;
    name: string
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


  const [roles, setRoles] = useState<Role[]>([]);

  const fetchPatients = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_HOST}/api/auth/list`);
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
        const response = await axios.get(`${import.meta.env.VITE_API_HOST}/api/role/all`);
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
        console.log('Report deleted successfully');
      })
      .catch((err) => {
        console.error('Error deleting report:', err);
        // Optionally: rollback frontend change if API fails
      });
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>, patientId: string) => {
    const files = e.target.files;
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => {
      formData.append("report", file); // ✅ match the field name used in multer
    });

    axios
      .post(`${import.meta.env.VITE_API_HOST}/api/auth/report/${patientId}`, formData)
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
        console.log('User deleted successfully');
      })
      .catch((err) => {
        console.error('Error deleting user:', err);
      });
  };

  const handleRoleChange = async (patientId: string, roleId: string) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_HOST}/api/auth/user/${patientId}`, {
        role: roleId, // Send role ID instead of role name
      });

      setPatients((prev) =>
        prev.map((p) => (p._id === patientId ? { ...p, role: { _id: roleId, name: roles.find(role => role._id === roleId)?.name || p.role.name } } : p))
      );
    } catch (error) {
      console.error("Error updating role:", error);
    }
  };



  return (
    <section className="py-12 sm:py-16 bg-white flex justify-center items-center mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-[2px] w-20 bg-darkGray"></div>
          <h2 className="text-3xl font-bold text-gray-900 text-center">
            Patient <span className="text-primaryBlue">Listing</span>
          </h2>
          <div className="h-[2px] w-20 bg-darkGray"></div>
        </div>

        {/* Table */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-darkGray">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="text-left px-4 py-3">Name</th>
                  <th className="text-left px-4 py-3">Phone</th>
                  <th className="text-left px-4 py-3">Sex</th>
                  <th className="text-left px-4 py-3">Age</th>
                  <th className="text-left px-4 py-3">Reports</th>
                  <th className="text-center px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr key={patient._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-3">{patient.name}</td>
                    <td className="px-4 py-3">{patient.phone}</td>
                    <td className="px-4 py-3 capitalize">{patient.sex}</td>
                    <td className="px-4 py-3">{patient.age}</td>
                    <td className="px-4 py-3">
                      <select onChange={(e) => handleRoleChange(patient._id, e.target.value)}>
                        {roles.map((role) => (
                          <option key={role._id} value={role._id}>
                            {role.name}
                          </option>
                        ))}
                      </select>
                      {patient.report.length === 0 ? (
                        <span className="text-gray-500">No Reports</span>
                      ) : (
                        <ul className="space-y-1">
                          {patient.report.map((url, index) => (
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
                                onClick={() => handleDeleteReport(patient._id, index)}
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

            {/* Loading & Empty States */}
            {loading ? (
              <div className="text-center text-gray-500 py-6">
                Loading patients...
              </div>
            ) : patients.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                No patients found.
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientListing;
