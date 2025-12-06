// src/components/Certificates.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaFilePdf,
  FaEye,
  FaDownload,
  FaShieldAlt,
  FaCertificate,
} from "react-icons/fa";

import iso from "../assets/certificates/iso.pdf";
import gst from "../assets/certificates/gst.pdf";
import udyam from "../assets/certificates/udyam.pdf";

export default function Certificates() {
  const docs = [
    {
      title: "ISO Certification",
      file: iso,
      icon: <FaShieldAlt className="text-[#0A66A3] text-5xl" />,
    },
    {
      title: "GST Certificate",
      file: gst,
      icon: <FaFilePdf className="text-[#0A66A3] text-5xl" />,
    },
    {
      title: "UDYAM Registration",
      file: udyam,
      icon: <FaCertificate className="text-[#0A66A3] text-5xl" />,
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-20 py-20 relative bg-gray-50">

      {/* BACKGROUND PATTERN */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')] pointer-events-none"></div>

      {/* HEADER WITH DECORATIVE LINES */}
      <div className="text-center mb-14 relative z-10">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="h-[2px] w-20 bg-[#0A66A3] rounded-lg"></span>
          <FaCertificate className="text-[#0A66A3] text-3xl" />
          <span className="h-[2px] w-20 bg-[#0A66A3] rounded-lg"></span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#0A66A3]">
          Our Legal Certifications
        </h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-2 w-28 h-[3px] bg-[#0A66A3]"
          style={{ transformOrigin: "center" }}
        ></motion.div>

        <p className="mt-4 text-gray-700 max-w-2xl mx-auto text-sm md:text-base">
          Angel Packers & Movers is officially registered and certified to
          provide reliable, safe, and compliant relocation services across India.
        </p>
      </div>

      {/* CARD GRID */}
      <div className="grid md:grid-cols-3 gap-10 relative z-10">
        {docs.map((doc, index) => (
          <motion.div
            key={index}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-200"
          >
            <div className="flex flex-col items-center text-center">
              
              {/* ICON CIRCLE */}
              <div className="mb-6 bg-gray-100 w-24 h-24 flex items-center justify-center rounded-full shadow-inner border border-gray-300">
                {doc.icon}
              </div>

              <h3 className="text-xl font-semibold text-[#0A66A3] mb-4">
                {doc.title}
              </h3>

              {/* BUTTONS */}
              <div className="flex gap-4 mt-4">

                {/* View Button */}
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-[#0A66A3] text-white px-5 py-2 rounded-md text-sm hover:bg-[#084d7a] transition-all shadow-md"
                >
                  <FaEye /> View
                </a>

                {/* Download Button */}
                <a
                  href={doc.file}
                  download
                  className="flex items-center gap-2 border border-[#0A66A3] text-[#0A66A3] px-5 py-2 rounded-md text-sm hover:bg-[#0A66A3] hover:text-white transition-all shadow-md"
                >
                  <FaDownload /> Download
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
