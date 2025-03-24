import { useState } from "react";
import { Upload, Trash2, FileText, Trash } from "lucide-react";

interface Patient {
  id: number;
  name: string;
  phone: string;
  gender: string;
  age: number;
  reports: File[];
}

const PatientListing = () => {
  // Sample patient data
  const [patients, setPatients] = useState<Patient[]>([
    {
      id: 1,
      name: "John Doe",
      phone: "+91 9876543210",
      gender: "Male",
      age: 32,
      reports: [],
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "+91 9765432109",
      gender: "Female",
      age: 28,
      reports: [],
    },
  ]);

  // Upload files for a patient
  const handleFileUpload = (
    e: React.ChangeEvent<HTMLInputElement>,
    patientId: number
  ) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setPatients(
        patients.map((patient) =>
          patient.id === patientId
            ? { ...patient, reports: [...patient.reports, ...newFiles] }
            : patient
        )
      );
    }
  };

  // Delete a file from a patient's report
  const handleDeleteFile = (patientId: number, fileIndex: number) => {
    setPatients(
      patients.map((patient) =>
        patient.id === patientId
          ? {
              ...patient,
              reports: patient.reports.filter(
                (_, index) => index !== fileIndex
              ),
            }
          : patient
      )
    );
  };

  // Delete a patient from the list
  const handleDeletePatient = (patientId: number) => {
    setPatients(patients.filter((patient) => patient.id !== patientId));
  };

  return (
    <section className="py-12 sm:py-16 bg-white flex justify-center items-center mb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            Patient <span className="text-primaryBlue">Listing</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Patient Table */}
        <div className="bg-white shadow-lg rounded-2xl p-6 border border-darkGray">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-700">
                  <th className="text-left px-4 py-3">Name</th>
                  <th className="text-left px-4 py-3">Phone</th>
                  <th className="text-left px-4 py-3">Gender</th>
                  <th className="text-left px-4 py-3">Age</th>
                  <th className="text-left px-4 py-3">Reports</th>
                  <th className="text-center px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient) => (
                  <tr
                    key={patient.id}
                    className="border-b hover:bg-gray-50 transition"
                  >
                    <td className="px-4 py-3">{patient.name}</td>
                    <td className="px-4 py-3">{patient.phone}</td>
                    <td className="px-4 py-3">{patient.gender}</td>
                    <td className="px-4 py-3">{patient.age}</td>

                    {/* Uploaded Reports */}
                    <td className="px-4 py-3">
                      {patient.reports.length === 0 ? (
                        <span className="text-gray-500">No Reports</span>
                      ) : (
                        <ul className="space-y-1">
                          {patient.reports.map((file, index) => (
                            <li
                              key={index}
                              className="flex items-center justify-between text-sm"
                            >
                              <span className="flex items-center gap-2 text-gray-700">
                                <FileText className="w-4 h-4 text-primaryBlue" />
                                {file.name}
                              </span>
                              <button
                                onClick={() =>
                                  handleDeleteFile(patient.id, index)
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

                    {/* Actions */}
                    <td className="px-4 py-3 text-center">
                      <div className="flex justify-center items-center gap-2">
                        {/* Upload Button */}
                        <label
                          htmlFor={`file-upload-${patient.id}`}
                          className="bg-primaryBlue text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-secondaryBlue transition flex items-center gap-2"
                        >
                          <Upload className="w-4 h-4" />
                          Upload New Report
                        </label>
                        <input
                          id={`file-upload-${patient.id}`}
                          type="file"
                          multiple
                          className="hidden"
                          accept=".pdf, .jpg, .jpeg, .png"
                          onChange={(e) => handleFileUpload(e, patient.id)}
                        />
                        {/* Delete Patient Button */}
                        <button
                          onClick={() => handleDeletePatient(patient.id)}
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

            {/* No Patients Message */}
            {patients.length === 0 && (
              <div className="text-center text-gray-500 py-6">
                No patients available.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientListing;
