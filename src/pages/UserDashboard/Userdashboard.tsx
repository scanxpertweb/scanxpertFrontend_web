// export default UserDashboard;
import { useEffect, useState } from "react";
import axios from "axios";
import { User, Phone, VenusAndMars, Calendar, DownloadCloud, FileText } from "lucide-react";
import { useParams } from "react-router-dom";

interface UserData {
  name: string;
  phone: string;
  sex: string;
  age: number;
  reports: string[]; // Assume backend provides report URLs
}

const UserDashboard = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); // Change 'userId' to 'id'

  console.log(`User ID from URL: ${id}`); // Debugging line

useEffect(() => {
  const fetchUserData = async () => {
    if (!id) {
      setError("User ID is missing in the URL.");
      setLoading(false);
      return;
    }
    
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_HOST}/api/auth/user/${id}`);
      setUser(response.data);
    } catch (err) {
      setError("Failed to fetch user data.");
    } finally {
      setLoading(false);
    }
  };

  fetchUserData();
}, [id]); 


  // Download report
  const handleDownload = (fileUrl: string) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileUrl.split("/").pop() || "report";
    link.click();
  };

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

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
                <span className="font-semibold">Name:</span> {user?.name}
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold">Phone:</span> {user?.phone}
              </p>
              <p className="flex items-center gap-2">
                <VenusAndMars className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold">Gender:</span> {user?.sex}
              </p>
              <p className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primaryBlue" />
                <span className="font-semibold">Age:</span> {user?.age}
              </p>
            </div>
          </div>

          {/* Card 2: Download Reports */}
          <div className="border border-darkGray rounded-2xl p-6 bg-white shadow-lg transition-transform hover:scale-105">
            <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
              <DownloadCloud className="w-6 h-6 text-green-500" />
              Download Reports
            </h3>
            {user?.reports?.length === 0 ? (
              <p className="text-sm text-gray-500">No reports available.</p>
            ) : (
              <ul className="space-y-3">
                {user?.reports?.map((fileUrl, index) => (
                  <li key={index} className="flex items-center justify-between text-sm sm:text-base">
                    <span className="flex items-center gap-2 text-gray-700">
                      <FileText className="w-5 h-5 text-primaryBlue" />
                      {fileUrl.split("/").pop()}
                    </span>
                    <button
                      onClick={() => handleDownload(fileUrl)}
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
            Stay Informed with <span className="text-primaryBlue">ScanXperts</span>
          </h3>
          <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
            Access and download your reports anytime and stay updated with your medical records. We ensure seamless and secure access for all your healthcare needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UserDashboard;
