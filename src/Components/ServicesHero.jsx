// src/components/ServicesHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTools } from "react-icons/fa";
import servicesBg from "../assets/images/bg5.avif"; // change to your services background
import { Link } from "react-router-dom";

export default function ServicesHero() {
  return (
    <section
      className="relative w-full min-h-[85vh] md:min-h-[85vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${servicesBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#000000]/85 via-[#000000]/60 to-transparent"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 max-w-5xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full tracking-wide border border-white/20 shadow">
          <FaTools className="text-white" />
          Professional Packing & Moving Services
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 mt-4 leading-tight text-white drop-shadow-xl">
          Our <span className="text-[#38a6f0]">Expert Services</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-6 sm:mb-8">
          From household shifting to office relocation, vehicle transport, and
          secure warehousing — we offer reliable solutions designed to make your
          moving experience smooth, safe, and stress-free.
        </p>

        {/* Minimal Keywords Section */}
        <div className="flex flex-wrap gap-3 mb-10 sm:mb-12">
          {[
            "Safe Packing",
            "Door-to-Door Delivery",
            "Affordable Pricing",
            "Timely Execution",
          ].map((item, index) => (
            <span
              key={index}
              className="px-4 py-2 text-xs sm:text-sm font-medium bg-white/10 text-white rounded-full border border-white/20 backdrop-blur-md"
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#services-list"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-[#0A66A3] to-[#084F7C] shadow-lg hover:shadow-xl
              transition text-sm sm:text-base"
            >
              View All Services
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-[#0A66A3]
              bg-white shadow-lg border border-[#BFC4C8] hover:shadow-xl
              transition text-sm sm:text-base"
            >
              Get Free Quote
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
