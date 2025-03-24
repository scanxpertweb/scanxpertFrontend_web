import { Link } from "react-router-dom";
import { Users, FilePlus } from "lucide-react";

const AdminDashboard = () => {
  return (
    <section className="py-12 sm:py-16 bg-white flex justify-center items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl">
        {/* Heading with lines on both sides */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 mb-8">
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
          <h2 className="text-2xl sm:text-3xl md:text-[40px] font-bold text-gray-900 text-center">
            Admin <span className="text-primaryBlue">Dashboard</span>
          </h2>
          <div className="h-[2px] w-12 sm:w-20 md:w-32 bg-darkGray"></div>
        </div>

        {/* Admin Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto mt-18">
          {/* Card: Onboard Patient */}
          <Link to="/onboard-patient" className="group">
            <div className="border border-darkGray rounded-2xl p-6 flex items-center gap-4 bg-white shadow-lg transition-transform group-hover:scale-105">
              <div className="bg-blue-100 p-4 rounded-full">
                <FilePlus className="w-8 h-8 text-primaryBlue" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  Onboard Patient
                </h3>
                <p className="text-sm text-gray-600">
                  Add a new patient and upload reports.
                </p>
              </div>
            </div>
          </Link>

          {/* Card: View Patient List */}
          <Link to="/patient-list" className="group">
            <div className="border border-darkGray rounded-2xl p-6 flex items-center gap-4 bg-white shadow-lg transition-transform group-hover:scale-105">
              <div className="bg-green-100 p-4 rounded-full">
                <Users className="w-8 h-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                  View Patient List
                </h3>
                <p className="text-sm text-gray-600">
                  View, update, and manage patient records.
                </p>
              </div>
            </div>
          </Link>
        </div>

        {/* Footer Section */}
        <div className="mt-12">
          <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 text-center mb-4">
            Stay Organized with{" "}
            <span className="text-primaryBlue">ScanXperts</span>
          </h3>
          <p className="text-sm text-gray-600 text-center max-w-2xl mx-auto">
            Easily manage patient records, update reports, and onboard new
            patients with just a few clicks. Ensure that all data is accurate
            and up-to-date to provide a seamless experience for both admins and
            patients.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
