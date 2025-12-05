// src/components/ModernNavbar.jsx
import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/images/logo.png";
import {
  FaBars,
  FaTimes,
  FaFacebookF,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaHome,
  FaImages,
  FaPhoneAlt,
  FaTruckMoving,
  FaInfoCircle,
  FaEnvelope,
  FaIdBadge,
  FaFileInvoice,
  FaCodeBranch,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

// NAV ITEMS FOR ANGEL PACKERS & MOVERS
const navItems = [
  { name: "Home", path: "/", icon: <FaHome className="inline mr-2" /> },
  { name: "About Us", path: "/about", icon: <FaInfoCircle className="inline mr-2" /> },
  { name: "Services", path: "/services", icon: <FaTruckMoving className="inline mr-2" /> },
  { name: "Gallery", path: "/gallery", icon: <FaImages className="inline mr-2" /> },
  { name: "Contact Us", path: "/contact", icon: <FaPhoneAlt className="inline mr-2" /> },
];

// ANGEL PACKERS INFO
const COMPANY_INFO = {
  udyam: "UDYAM-UP-02-0064073",
  gst: "09BCWPK6595B1ZY",
  email: "info@angelpackersandmovers.co.in",
  mobile: "+918006885800",
};

// Social Links
const socialLinks = [
  { name: "facebook", url: "https://www.facebook.com", icon: FaFacebookF, color: "#0A66A3" },
  { name: "instagram", url: "https://www.instagram.com", icon: FaInstagram, color: "#E1306C" },
  { name: "twitter", url: "https://www.twitter.com", icon: FaTwitter, color: "#1DA1F2" },
  { name: "youtube", url: "https://www.youtube.com", icon: FaYoutube, color: "#FF0000" },
  { name: "linkedin", url: "https://www.linkedin.com", icon: FaLinkedinIn, color: "#0077B5" },
];

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const panelRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (panelRef.current && !panelRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const navLinkClasses = (path) =>
    `cursor-pointer transition flex items-center gap-2 md:gap-1 hover:text-[#0A66A3] ${
      pathname === path ? "text-[#0A66A3] font-semibold" : "text-black"
    } text-base md:text-sm`;

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#0A66A3] text-white text-xs md:text-sm py-2 px-4 md:px-12 font-sans">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Desktop */}
          <div className="hidden md:flex justify-between w-full">
            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <FaIdBadge />
                <span className="font-semibold">UDYAM:</span> {COMPANY_INFO.udyam}
              </p>
              <p className="flex items-center gap-1">
                <FaFileInvoice />
                <span className="font-semibold">GSTIN:</span> {COMPANY_INFO.gst}
              </p>
            </div>

            <div className="flex space-x-6">
              <p className="flex items-center gap-1">
                <FaEnvelope />
                <span className="font-semibold">Email:</span> {COMPANY_INFO.email}
              </p>
              <p className="flex items-center gap-1">
                <FaPhoneAlt />
                <span className="font-semibold">Call:</span> {COMPANY_INFO.mobile}
              </p>
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden flex justify-center w-full text-center">
            <p className="flex items-center justify-center gap-1">
              <FaEnvelope /> {COMPANY_INFO.email}
            </p>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="w-full px-4 md:px-12 py-2 bg-white shadow-md relative z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">

          {/* Logo */}
          <Link to="/">
            <img
              src={logo}
              alt="Angel Packers and Movers"
              className="h-16 md:h-18 object-contain"
            />
          </Link>

          {/* Mobile Toggle */}
          <div className="md:hidden text-black">
            <FaBars onClick={toggleMenu} className="cursor-pointer text-2xl" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex gap-6 text-sm font-medium uppercase tracking-wide">
              {navItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={navLinkClasses(item.path)}>
                    {item.icon}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex gap-3 ml-6">
              {socialLinks.map(({ name, url, icon: Icon, color }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition transform hover:scale-110"
                  style={{ color }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex"
            >
              <motion.div
                ref={panelRef}
                className="w-64 h-full bg-white shadow-xl px-6 py-6 flex flex-col"
              >
                {/* Panel Header */}
                <div className="flex justify-between items-center mb-4">
                  <img src={logo} alt="Angel" className="h-14 sm:h-10" />
                  <FaTimes
                    className="text-2xl text-black cursor-pointer"
                    onClick={toggleMenu}
                  />
                </div>

                <hr className="mb-4" />

                {/* Mobile Nav */}
                <nav className="flex flex-col gap-4 text-gray-800 text-lg">
                  {navItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`flex items-center gap-3 ${
                        pathname === item.path
                          ? "font-semibold text-[#0A66A3]"
                          : "text-black"
                      }`}
                      onClick={toggleMenu}
                    >
                      {item.icon}
                      {item.name}
                    </Link>
                  ))}
                </nav>

                {/* Footer Info */}
                <div className="mt-auto pt-6 border-t text-sm">
                  <p className="flex items-center gap-2 py-1">
                    <FaFileInvoice /> <strong>GSTIN:</strong> {COMPANY_INFO.gst}
                  </p>
                  <p className="flex items-center gap-2 py-1">
                    <FaPhoneAlt /> <strong>Call:</strong> {COMPANY_INFO.mobile}
                  </p>

                  <div className="flex gap-4 mt-3 text-xl">
                    {socialLinks.map(({ name, url, icon: Icon, color }) => (
                      <a
                        key={name}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition transform hover:scale-110"
                        style={{ color }}
                      >
                        <Icon />
                      </a>
                    ))}
                  </div>
                </div>
              </motion.div>

              <div
                className="flex-1 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default ModernNavbar;
