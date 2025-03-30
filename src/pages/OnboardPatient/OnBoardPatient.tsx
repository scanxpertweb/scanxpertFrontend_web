import { useState } from "react";
import { ArrowLeft, Upload, X } from "lucide-react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
const OnBoardPatient = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    sex: "",
    age: "",
    role: "patient",
    report: [] as File[],
  });

  const navigate = useNavigate();

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
        report: [...formData.report, ...Array.from(e.target.files)],
      });
    }
  };

  const removeFile = (index: number) => {
    setFormData({
      ...formData,
      report: formData.report.filter((_, i) => i !== index),
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.report.length === 0) {
      toast.error("Please upload at least one report.");
      return;
    }

    const form = new FormData();
    form.append("name", formData.name);
    form.append("phone", formData.phone);
    form.append("sex", formData.sex);
    form.append("age", formData.age);
    form.append("role", formData.role);

    formData.report.forEach((file) => {
      form.append("report", file);
    });

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_HOST}/api/auth/register`, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const data = res.data;

      if (res.status === 201) {
        toast.success("Patient onboarded successfully!");
        setFormData({
          name: "",
          phone: "",
          sex: "",
          age: "",
          role: "patient",
          report: [],
        });
        navigate('/admin-dashboard');
      } else {
        toast.error("Failed to onboard: " + (data?.message || "Unknown error"));
      }
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Something went wrong while onboarding the patient.");
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-4xl">
         {/* Back Button */}
         <div className="hidden md:flex justify-start mb-8">
          <Button
            onClick={() => navigate('/admin-dashboard')}
            className="flex items-center gap-2 bg-primaryBlue text-white"
          >
            <ArrowLeft className="w-4 h-4"/>
            Back
          </Button>
        </div>
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
                name="sex"
                value={formData.sex}
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



          {/* Upload report */}
          <div>
            <label className="text-gray-700 font-semibold block mb-2">
              Upload report (PDF or Image)
            </label>
            <div className="flex items-center gap-4 border border-gray-300 px-4 py-3 rounded-lg bg-gray-50">
              <input
                type="file"
                name="report"
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
            {formData.report.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="text-sm font-semibold text-gray-700 mb-2">
                  Uploaded Files:
                </h4>
                <ul className="border border-gray-300 rounded-lg p-3 space-y-2">
                  {formData.report.map((file, index) => (
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
