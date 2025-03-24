import { Mail, MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white py-4 w-full border-lightBlue border-solid border-t-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-6 mt-3">
        {/* Logo & Social Links */}
        <div className="flex flex-col md:items-start sm:items-start ml-6">
          <Link to="/home">
            <img
              src="/logoicon.png"
              alt="ScanXpert Logo"
              className="h-16 w-auto"
            />
          </Link>
          <div className="flex gap-4 mt-3">
            <a
              href="#"
              className="p-2 bg-white text-accentOrange rounded-full hover:opacity-80 transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-white text-accentOrange rounded-full hover:opacity-80 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-start sm:items-start ml-3">
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/ourservices"
                className="hover:underline hover:text-accentOrange transition"
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                to="/aboutus"
                className="hover:underline hover:text-accentOrange transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contactus"
                className="hover:underline hover:text-accentOrange transition"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div className="flex flex-col md:items-start sm:items-start ml-3">
          <h3 className="text-lg font-semibold mb-3">Legal</h3>
          <ul className="space-y-2">
            <li>
              <a
                className="hover:underline hover:text-accentOrange transition"
              >
                <Link to="/privacy-policy">Privacy Policy</Link>
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:text-accentOrange transition"
              >
                <Link to="/terms-of-services">Terms & Conditions</Link>
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:text-accentOrange transition"
              >
                <Link to="/disclaimer">Disclaimer</Link>
              </a>
            </li>
            <li>
              <a
                className="hover:underline hover:text-accentOrange transition"
              >
                <Link to="/refund-policy">Refund Policy</Link>
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Contact */}
        <div className="flex flex-col md:items-start sm:items-start ml-3">
          <h3 className="text-lg font-semibold mb-3">Quick Contact</h3>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <a href="tel:+918891240082" className="flex items-center gap-2 hover:underline hover:text-accentOrange transition">
                <Phone size={16} className="text-accentOrange" /> +91 88912 40082
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="mailto:scan.xperts@gmail.com" className="flex items-center gap-2 hover:underline hover:text-accentOrange transition">
                <Mail size={16} className="text-accentOrange" /> scan.xperts@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="https://maps.app.goo.gl/dJ42z4MMHf19SAhHA" target="_blank" className="flex items-center gap-2 hover:underline hover:text-accentOrange transition">
                <MapPin size={16} className="text-accentOrange" /> Plot No. 475, 11th Cross Road,
                <br /> Panampilly Nagar, Kochi, Kerala, <br />
                India
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-primaryBlue mt-4 border-t-2 border-gray-400 text-center text-white text-bold text-sm py-2">
        <p className="text-sm mt-2">© {new Date().getFullYear()} ScanXpert. All rights reserved.</p>
        <p className="text-sm align-left"> Designed by <a href="https://designloop.framer.website/" target="_blank" className="text-accentOrange text-italic">DesignLoop</a></p>
      </div>
    </footer>
  );
};

export default Footer;
