// src/components/AboutHero.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaShieldAlt,
  FaClock,
  FaHandshake,
} from "react-icons/fa";
import aboutBg from "../assets/images/bg1.jpg";
import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section
      className="relative w-full min-h-[80vh] sm:min-h-[80vh] md:min-h-[90vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0B0C]/85 via-[#0B0B0C]/60 to-transparent"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 max-w-5xl"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Trusted Badge */}
        <span className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full tracking-wide border border-white/20 shadow">
          <FaTruckMoving className="text-white text-sm sm:text-base" />
          Trusted Since 2021
        </span>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 sm:mb-4 mt-3 sm:mt-4 leading-tight text-white drop-shadow-lg">
          Angel Packers & Movers
        </h1>

        {/* Sub Text */}
        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 text-gray-200 max-w-xl leading-relaxed">
          Your trusted partner for{" "}
          <span className="font-semibold text-[#0A66A3]">safe, secure</span>{" "}
          and{" "}
          <span className="font-semibold text-[#0A66A3]">on-time relocations</span>{" "}
          for homes, offices, and vehicles across India.
        </p>

        {/* Icons Row */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-5 mb-8 sm:mb-10">
          {/* Icon Card */}
          <div className="flex items-center gap-2 bg-[#0A66A3]/80 border border-[#BFC4C8]/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-md">
            <FaTruckMoving className="text-white text-sm sm:text-lg" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-white">
              Fast Moves
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#0B0B0C]/70 border border-[#BFC4C8]/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-md">
            <FaShieldAlt className="text-white text-sm sm:text-lg" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-white">
              Safe & Secure
            </span>
          </div>

          <div className="flex items-center gap-2 bg-[#0A66A3]/70 border border-[#BFC4C8]/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-md">
            <FaClock className="text-white text-sm sm:text-lg" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-white">
              On-Time Delivery
            </span>
          </div>

          <div className="flex items-center gap-2 bg-green-600/80 border border-[#BFC4C8]/30 px-2 sm:px-3 py-1.5 sm:py-2 rounded-lg shadow-md">
            <FaHandshake className="text-white text-sm sm:text-lg" />
            <span className="text-xs sm:text-sm md:text-base font-medium text-white">
              Trusted Team
            </span>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 sm:gap-4">
          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-lg font-semibold text-white 
              bg-gradient-to-r from-[#0A66A3] to-[#084F7C] shadow-lg hover:shadow-xl 
              transition text-xs sm:text-sm md:text-base"
            >
              Get Free Quote
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/gallery"
              className="inline-block px-5 sm:px-6 md:px-7 py-2.5 sm:py-3 rounded-lg font-semibold text-[#0A66A3] 
              bg-white shadow-lg border border-[#BFC4C8] hover:shadow-xl 
              transition text-xs sm:text-sm md:text-base"
            >
              Explore Gallery
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
