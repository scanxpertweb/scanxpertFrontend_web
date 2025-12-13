import { Mail, MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primaryBlue text-white w-full border-t-4 border-lightBlue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8 py-10 sm:py-12 lg:py-14">
          {/* Logo & Social Links */}
          <div className="flex flex-col items-center sm:items-start">
            <Link
              to="/home"
              className="mb-4 hover:opacity-90 transition-opacity"
            >
              <img
                src="/logoicon.png"
                alt="ScanXpert Logo"
                className="h-16 sm:h-18 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-200 mb-4 text-center sm:text-left max-w-xs">
              Your trusted partner for advanced dental and ENT imaging solutions
              in Kochi.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2.5 bg-white text-accentOrange rounded-full hover:bg-accentOrange hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                aria-label="Facebook"
              >
                <FaFacebook size={18} />
              </a>
              <a
                href="https://www.instagram.com/scanxperts?igsh=bDE0cnN6eDhhbG5y&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white text-accentOrange rounded-full hover:bg-accentOrange hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-accentOrange pb-2 w-full text-center sm:text-left">
              Quick Links
            </h3>
            <ul className="space-y-3 w-full">
              <li>
                <Link
                  to="/ourservices"
                  className="block text-gray-200 hover:text-accentOrange hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/aboutus"
                  className="block text-gray-200 hover:text-accentOrange hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block text-gray-200 hover:text-accentOrange hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-accentOrange pb-2 w-full text-center sm:text-left">
              Legal
            </h3>
            <ul className="space-y-3 w-full">
              <li>
                <Link
                  to="/privacy-policy"
                  className="block text-gray-200 hover:text-accentOrange hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms-of-services"
                  className="block text-gray-200 hover:text-accentOrange hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/disclaimer"
                  className="block text-gray-200 hover:text-accentOrange hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link
                  to="/refund-policy"
                  className="block text-gray-200 hover:text-accentOrange hover:translate-x-1 transition-all duration-200 text-sm sm:text-base"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-bold mb-4 text-white border-b-2 border-accentOrange pb-2 w-full text-center sm:text-left">
              Quick Contact
            </h3>
            <ul className="space-y-3 w-full">
              <li>
                <a
                  href="tel:+918891240082"
                  className="flex items-start gap-3 text-gray-200 hover:text-accentOrange transition-all duration-200 group text-sm sm:text-base"
                >
                  <Phone
                    size={18}
                    className="text-accentOrange mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>+91 88912 40082</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:scan.xperts@gmail.com"
                  className="flex items-start gap-3 text-gray-200 hover:text-accentOrange transition-all duration-200 group text-sm sm:text-base break-all"
                >
                  <Mail
                    size={18}
                    className="text-accentOrange mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>scan.xperts@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/3Way5iRTCK8Y1bG3A"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-gray-200 hover:text-accentOrange transition-all duration-200 group text-sm sm:text-base"
                >
                  <MapPin
                    size={18}
                    className="text-accentOrange mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                  />
                  <span>
                    Plot No. 475, 11th Cross Road,
                    <br /> Panampilly Nagar, Kochi,
                    <br /> Kerala, India
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-400/30 bg-primaryBlue">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl py-4 sm:py-5">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
              <p className="text-xs sm:text-sm text-gray-200 text-center sm:text-left">
                © {new Date().getFullYear()} ScanXpert. All rights reserved.
              </p>
              <p className="text-xs sm:text-sm text-gray-200 text-center sm:text-right">
                Website Designed by{" "}
                <a
                  href="https://www.instagram.com/sshashank_singh_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accentOrange italic hover:text-white hover:underline transition-colors duration-200 font-medium"
                >
                  Shashank Singh
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
