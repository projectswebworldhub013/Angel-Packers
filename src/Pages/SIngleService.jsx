// src/pages/SingleService.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../data/servicesData";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowLeft,
  FaPhoneAlt,
  FaStar,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

export default function SingleService() {
  const { serviceId } = useParams();

  const service = servicesData.find(
    (s) => s.path.split("/").pop() === serviceId
  );

  const [expandedFaq, setExpandedFaq] = useState(null);

  if (!service) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-2xl font-bold text-[#0A66A3]">Service Not Found</h2>
        <Link
          to="/services"
          className="inline-block mt-4 px-6 py-3 bg-[#0A66A3] text-white rounded-lg hover:bg-[#06275f] transition duration-300"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#FFFFFF]">
      {/* Back Button */}
      <div className="mb-8">
        <Link
          to="/services"
          className="flex items-center text-[#0A66A3] hover:text-[#06275f] font-semibold transition"
        >
          <FaArrowLeft className="mr-2" /> Back to Services
        </Link>
      </div>

      {/* Hero Title Section */}
      <div className="text-center mb-16 relative">
        {/* Decorative lines */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 border-t border-[#BFC4C8]"></div>

        <div className="relative inline-block bg-[#FFFFFF] px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A66A3] mb-2">
            {service.name}
          </h1>
          <div className="w-16 h-1 bg-[#0A66A3] mx-auto mb-3 rounded-full"></div>
          <p className="text-[#0B0B0C] max-w-2xl mx-auto text-lg">
            Angel Packers & Movers — making your{" "}
            <span className="text-[#0A66A3] font-semibold">relocation safe, fast,</span>{" "}
            and <span className="text-[#E53935] font-semibold">stress-free</span>.
          </p>
        </div>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-12 items-stretch">
        {/* Left Section (Image + Why Choose Us) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col gap-6"
        >
          {/* Image */}
          <div className="rounded-xl shadow-lg overflow-hidden group flex-4">
            <img
              src={service.image}
              alt={service.name}
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              style={{ minHeight: "300px" }}
            />
          </div>

          {/* Why Choose Us */}
          <div className="bg-[#FFFFFF] border-l-4 border-[#0A66A3] p-5 rounded-lg shadow flex-1">
            <h3 className="text-xl font-semibold text-[#0A66A3] mb-3 flex items-center">
              <FaStar className="text-[#E53935] mr-2" /> Why Choose Angel Packers & Movers?
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[#0B0B0C]">
              <li className="flex items-center">
                <FaCheckCircle className="text-[#0A66A3] mr-2" /> Safe & Secure Packing
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#0A66A3] mr-2" /> On-Time Delivery
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#0A66A3] mr-2" /> Affordable Pricing
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-[#0A66A3] mr-2" /> Pan-India Service
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Right Section (Content + FAQs) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full lg:w-1/2 flex flex-col gap-8"
        >
          {/* Service Details */}
          <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-8 flex flex-col gap-6">
            <div className="flex items-center mb-6">
              <Icon className="text-4xl text-[#E53935]" />
              <h2 className="ml-3 text-3xl font-bold text-[#0A66A3] leading-snug">
                {service.name}
              </h2>
            </div>

            <p className="text-[#0B0B0C] leading-relaxed text-lg">
              {service.description}
            </p>

            <h3 className="text-xl font-semibold text-[#0B0B0C] mb-3">
              Key Features:
            </h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-[#0A66A3] mt-1 mr-3 flex-shrink-0" />
                  <span className="text-[#0B0B0C]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 text-center bg-[#0A66A3] text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-[#06275f] transition duration-300"
              >
                Book This Service
              </Link>
              <a
                href="tel:+918006885800"
                className="flex-1 text-center bg-[#E53935] text-white py-3 px-6 rounded-lg font-bold shadow-md hover:bg-[#b71c1c] transition duration-300 flex items-center justify-center"
              >
                <FaPhoneAlt className="mr-2" /> Call Now
              </a>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-[#FFFFFF] rounded-xl shadow-lg p-6">
            <h3 className="text-2xl font-bold text-[#0A66A3] mb-6">FAQs</h3>
            {service.faqs.map((faq, index) => (
              <div key={index} className="border-b border-[#BFC4C8] py-3">
                <button
                  onClick={() =>
                    setExpandedFaq(expandedFaq === index ? null : index)
                  }
                  className="w-full flex justify-between items-center text-[#0B0B0C] font-semibold text-left focus:outline-none"
                >
                  <span>{faq.question}</span>
                  {expandedFaq === index ? (
                    <FaChevronUp className="text-[#0A66A3]" />
                  ) : (
                    <FaChevronDown className="text-[#0A66A3]" />
                  )}
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="overflow-hidden mt-2 text-[#0B0B0C]"
                    >
                      <p className="text-[#0B0B0C]">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
