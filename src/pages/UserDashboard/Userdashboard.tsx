import { useState } from "react";
import { User, Phone, VenusAndMars, Calendar, DownloadCloud, FileText } from "lucide-react";

interface UserData {
  name: string;
  phone: string;
  gender: string;
  age: number;
  reports: File[];
}

const UserDashboard = () => {
  // Dummy user data
  const [user] = useState<UserData>({
    name: "John Doe",
    phone: "+91 9876543210",
    gender: "Male",
    age: 32,
    reports: [
      new File(["sample1"], "Report_01.pdf", { type: "application/pdf" }),
      new File(["sample2"], "Scan_Image.png", { type: "image/png" }),
    ],
  });

  // Download report
  const handleDownload = (file: File) => {
    const url = URL.createObjectURL(file);
    const link = document.createElement("a");
    link.href = url;
    link.download = file.name;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <section className="py-12 sm:py-16 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">
            User <span className="text-primaryBlue">Dashboard</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Grid Layout for Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Card 1: User Details */}
          <div className="border border-darkGray rounded-2xl p-6 bg-white shadow-lg transition-transform hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <User className="w-6 h-6 text-primaryBlue" />
              Your Details
            </h3>
            <div className="space-y-3 text-sm sm:text-base text-gray-700">
              <p className="flex items-center gap-2">
                <User className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold">Name:</span> {user.name}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold">Phone:</span> {user.phone}
              </p>
              <p className="flex items-center gap-2">
                <VenusAndMars className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold">Gender:</span> {user.gender}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold">Age:</span> {user.age}
              </p>
            </div>
          </div>

          {/* Card 2: Download Reports */}
          <div className="border border-darkGray rounded-2xl p-6 bg-white shadow-lg transition-transform hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DownloadCloud className="w-6 h-6 text-green-500" />
              Download Reports
            </h3>
            {user.reports.length === 0 ? (
              <p className="text-sm text-gray-500">No reports available.</p>
            ) : (
              <ul className="space-y-3">
                {user.reports.map((file, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-between text-sm sm:text-base"
                  >
                    <span className="flex items-center gap-2 text-gray-700">
                      <FileText className="w-5 h-5 text-primaryBlue" />
                      {file.name}
                    </span>
                    <button
                      onClick={() => handleDownload(file)}
                      className="text-primaryBlue hover:text-darkOrange flex items-center gap-1"
                    >
                      <DownloadCloud className="w-4 h-4" />
                      Download
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-4">
            Stay Informed with{" "}
            <span className="text-primaryBlue">ScanXperts</span>
          </h3>
          <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
            Access and download your reports anytime and stay updated with your
            medical records. We ensure seamless and secure access for all your
            healthcare needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
