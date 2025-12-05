// src/components/GalleryHero.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaImages } from "react-icons/fa";
import galleryBg from "../assets/images/bg4.jpg"; // Replace with actual gallery background
import { Link } from "react-router-dom";

export default function GalleryHero() {
  return (
    <section
      className="relative w-full min-h-[85vh] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${galleryBg})` }}
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
        {/* Badge */}
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md text-white text-xs sm:text-sm font-semibold rounded-full tracking-wide border border-white/20 shadow">
          <FaImages className="text-white" />
          Angel Packers & Movers — Gallery
        </span>

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold mt-4 mb-4 leading-tight text-white drop-shadow-xl">
          Explore Our <span className="text-[#0A66A3]">Relocation Gallery</span>
        </h1>

        {/* Subtext */}
        <p className="text-gray-200 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl leading-relaxed mb-6 sm:mb-8">
          Discover real moving moments, professional packing, transportation,
          and on-ground work done by our expert team across India.
        </p>

        {/* Minimal Keywords */}
        <div className="flex flex-wrap gap-3 mb-10 sm:mb-12">
          {[
            "Real Relocation Photos",
            "Professional Packing",
            "Safe Loading",
            "Modern Vehicles",
            // "Client Deliveries",
            // "On-Ground Team Work",
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
            <Link
              to="/gallery"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-white
              bg-gradient-to-r from-[#0A66A3] to-[#084F7C] shadow-lg hover:shadow-xl
              transition text-sm sm:text-base"
            >
              View Full Gallery
            </Link>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 rounded-lg font-semibold text-[#0A66A3]
              bg-white shadow-lg border border-[#BFC4C8] hover:shadow-xl
              transition text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
