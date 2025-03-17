import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";
import TopBar from "@/components/Topbar/Topbar";
import { motion } from "framer-motion"; // Import Framer Motion

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* TopBar - Hidden on Mobile */}
      <div className="hidden lg:block">
        <TopBar />
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md fixed w-full py-2 top-0 lg:top-[32px] left-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/home">
                <img
                  src="/logo.jpg"
                  alt="ScanXpert Logo"
                  className="h-14 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex space-x-6">
                {["Home", "About Us", "Our Services", "Contact Us"].map(
                  (item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                          className={cn(
                            "text-gray-700 hover:text-blue-900 font-montserrat font-bold"
                          )}
                        >
                          {item}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                )}
              </NavigationMenuList>
            </NavigationMenu>

            {/* Download Reports Button (Always Visible) */}
            <Button className="bg-[#0158a9] text-white px-4 py-2 rounded-lg hover:bg-[#014b8f] hidden md:inline-block">
              Download Reports
            </Button>

            {/* Mobile Hamburger Menu Button */}
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Smooth Transition */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -10 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={`absolute top-16 left-0 w-full bg-white shadow-md p-4 md:hidden ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-4">
            {["Home", "About Us", "Our Services", "Contact Us"].map((item, index) => (
              <li key={index}>
                <Link
                  to={`/${item.toLowerCase().replace(/\s+/g, "")}`}
                  className="block text-gray-700 hover:text-blue-900 font-montserrat font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
            <li>
              <Button className="bg-[#0158a9] text-white px-4 py-2 rounded-lg hover:bg-[#014b8f] w-full">
                Download Reports
              </Button>
            </li>
          </ul>
        </motion.div>
      </nav>

      {/* Prevent Content Overlap */}
      <div className="h-[64px] sm:h-[88px]"></div>
    </>
  );
};

export default Navbar;
