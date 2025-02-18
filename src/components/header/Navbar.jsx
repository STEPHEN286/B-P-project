import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons
import { p } from "framer-motion/client";

const navLinks = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <div className="bg-white shadow-md">
      <div className="flex justify-between items-center container mx-auto p-5">
        {/* LOGO */}
        <div>
          <h3>
            <Link to="/" className="text-xl font-bold text-blue-600">
              B&G
            </Link>
          </h3>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex justify-center">
            {navLinks.map((link, index) => (
              <li key={index} className="mr-5">
                <Link to={link.path} className="text-gray-500 font-medium  hover:text-gray-800">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

      
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6 text-blue-600" />
           
          ) : (
            // 
            <Bars3Icon className="w-6 h-6 text-gray-600" />
           
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 mt-15 h-fit z-40 bg-white md:hidden ">
          <div className="p-4 space-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.path}
                className="block text-gray-700 hover:text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
