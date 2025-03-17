import { MapPin, Mail, Phone, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-[#0158a9] text-white text-xs sm:text-sm py-2 px-4 sm:px-6 lg:px-8 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2 sm:gap-4">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <MapPin size={16} />
          <span>Plot No. 475, 11th Cross Road, Panampilly Nagar, Kochi, Kerala, India</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Mail size={16} />
          <span>scansxpert@gmail.com</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Phone size={16} />
          <span>+91-8891240082</span>
        </div>
        <div className="flex items-center space-x-1 sm:space-x-2">
          <Clock size={16} />
          <span>All Days - 9:00 AM to 9:00 PM</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
