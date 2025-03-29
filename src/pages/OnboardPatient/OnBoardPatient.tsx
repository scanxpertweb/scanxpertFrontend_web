import { useState } from "react";
import { Upload, X } from "lucide-react";
import axios from "axios";

const OnBoardPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    gender: "",
    age: "",
    role: "Patient",
    reports: [] as File[],
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({
        ...formData,
        reports: [...formData.reports, ...Array.from(e.target.files)],
      });
    }
  };

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      reports: formData.reports.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.reports.length === 0) {
      alert("Please upload at least one report.");
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("gender", formData.gender);
    form.append("age", formData.age);
    form.append("role", formData.role);

    formData.reports.forEach((file) => {
      form.append("reports", file);
    });

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_HOST}/api/auth/register`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = res.data;

      if (res.status === 200) {
        alert("Patient onboarded successfully!");
        console.log("Response:", data);
        setFormData({
          name: "",
          phone: "",
          gender: "",
          age: "",
          role: "patient",
          reports: [],
        });
      } else {
        alert("Failed to onboard: " + (data?.message || "Unknown error"));
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Something went wrong while onboarding the patient.");
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 text-center">
            Onboard <span className="text-primaryBlue">User</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-2xl p-8 space-y-6 border border-darkGray"
        >
          {/* Name */}
          <div>
            <label className="text-gray-700 font-semibold block mb-2">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter patient's name"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primaryBlue"
              required
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-gray-700 font-semibold block mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 1234567890"
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primaryBlue"
              required
            />
          </div>

          {/* Gender and Age */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Gender */}
            <div>
              <label className="text-gray-700 font-semibold block mb-2">
                Gender <span className="text-red-500">*</span>
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primaryBlue"
                required
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Age */}
            <div>
              <label className="text-gray-700 font-semibold block mb-2">
                Age <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Enter age"
                className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primaryBlue"
                required
              />
            </div>
          </div>

            {/* Role */}
            <div>
            <label className="text-gray-700 font-semibold block mb-2">
              Role <span className="text-red-500">*</span>
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border border-gray-300 px-4 py-3 rounded-lg outline-none focus:ring-2 focus:ring-primaryBlue"
              required
            >
              <option value="patient">Patient</option>
              <option value="admin">Admin</option>
            </select>
          </div>



          {/* Upload Reports */}
          <div>
            <label className="text-gray-700 font-semibold block mb-2">
              Upload Reports (PDF or Image)
            </label>
            <div className="flex items-center gap-4 border border-gray-300 px-4 py-3 rounded-lg bg-gray-50">
              <input
                type="file"
                name="reports"
                accept=".pdf, .jpg, .jpeg, .png"
                multiple
                onChange={handleFileChange}
                className="hidden"
                id="fileUpload"
              />
              <label
                htmlFor="fileUpload"
                className="bg-primaryBlue text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-darkOrange transition"
              >
                <Upload className="inline-block mr-2" />
                Upload Files
              </label>
            </div>

            {/* File Preview */}
            {formData.reports.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Uploaded Files:
                </h4>
                <ul className="border border-gray-300 rounded-lg p-3 space-y-2">
                  {formData.reports.map((file, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-sm text-gray-700"
                    >
                      {file.name}
                      <button
                        type="button"
                        onClick={() => removeFile(index)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4 mt-6">
            <button
              type="button"
              className="bg-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-400 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-primaryBlue text-white px-6 py-3 rounded-lg hover:bg-darkOrange transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default OnBoardPatient;
