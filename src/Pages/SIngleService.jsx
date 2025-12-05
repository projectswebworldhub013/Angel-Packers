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
  FaQuestionCircle,
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
          className="inline-block mt-4 px-6 py-3 bg-[#0A66A3] text-white rounded-lg hover:bg-[#06275f] transition"
        >
          Back to Services
        </Link>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <>
      {/* PAGE WRAPPER */}
      <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/services"
            className="flex items-center text-[#0A66A3] hover:text-[#06275f] font-semibold transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Services
          </Link>
        </div>

        {/* PAGE TITLE */}
        <div className="text-center mb-16 relative">
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 border-t border-[#BFC4C8]"></div>

          <div className="relative inline-block bg-white px-6">
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

        {/* 2 COLUMN DESKTOP — AUTO SINGLE COLUMN MOBILE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT SIDE (Image only on mobile, with Why Choose hidden on mobile) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6 order-1 lg:order-1"
          >
            {/* IMAGE */}
            <div className="rounded-xl shadow-lg overflow-hidden group">
              <img
                src={service.image}
                alt={service.name}
                className="w-full object-cover transform group-hover:scale-110 transition duration-500
                h-[240px] sm:h-[280px] md:h-[300px] lg:h-[340px]"
              />
            </div>

            {/* WHY CHOOSE — HIDDEN IN MOBILE, ONLY SHOWN IN DESKTOP */}
            <div className="hidden lg:block bg-white border-l-4 border-[#0A66A3] p-5 rounded-lg shadow">
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
                <li className="flex items-center">
                  <FaCheckCircle className="text-[#0A66A3] mr-2" /> Professional Trained Team
                </li>
                <li className="flex items-center">
                  <FaCheckCircle className="text-[#0A66A3] mr-2" /> High-Quality Materials
                </li>
              </ul>
            </div>
          </motion.div>

          {/* RIGHT SIDE — SERVICE DETAILS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 flex flex-col gap-6 order-2 lg:order-2"
          >
            <div className="flex items-center mb-2">
              <Icon className="text-4xl text-[#E53935]" />
              <h2 className="ml-3 text-3xl font-bold text-[#0A66A3]">
                {service.name}
              </h2>
            </div>

            <p className="text-[#0B0B0C] leading-relaxed text-lg">
              {service.description}
            </p>

            <h3 className="text-xl font-semibold text-[#0B0B0C]">Key Features:</h3>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <FaCheckCircle className="text-[#0A66A3] mt-1 mr-3" />
                  <span className="text-[#0B0B0C]">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="flex-1 text-center bg-[#0A66A3] text-white py-3 rounded-lg font-bold shadow-md hover:bg-[#06275f]"
              >
                Book This Service
              </Link>

              <a
                href="tel:+918006885800"
                className="flex-1 text-center bg-[#E53935] text-white py-3 rounded-lg font-bold shadow-md hover:bg-[#b71c1c] flex items-center justify-center"
              >
                <FaPhoneAlt className="mr-2" /> Call Now
              </a>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-6 md:px-12 lg:px-20 pb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl md:text-4xl font-bold text-[#0A66A3] mb-8 text-center">
            Frequently Asked Questions
          </h3>

          {service.faqs.map((faq, index) => (
            <div key={index} className="border-b border-[#D5D9DB] py-4 md:py-6">
              <button
                onClick={() =>
                  setExpandedFaq(expandedFaq === index ? null : index)
                }
                className="cursor-pointer w-full flex justify-between items-center font-semibold text-left group"
              >
                <span className="flex items-center gap-3 text-[#0B0B0C] text-base md:text-lg group-hover:text-[#0A66A3] transition">
                  <FaQuestionCircle className="text-[#0A66A3] text-xl md:text-2xl" />
                  {faq.question}
                </span>

                {expandedFaq === index ? (
                  <FaChevronUp className="text-[#0A66A3] text-lg md:text-xl" />
                ) : (
                  <FaChevronDown className="text-[#0A66A3] text-lg md:text-xl" />
                )}
              </button>

              <AnimatePresence>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden mt-3"
                  >
                    <p className="text-[#0B0B0C] text-sm md:text-base leading-relaxed pl-9 md:pl-12">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE — MOBILE ONLY AT BOTTOM */}
      <section className="px-6 md:px-12 lg:px-20 pb-20 lg:hidden">
        <div className="bg-white border-l-4 border-[#0A66A3] p-5 rounded-lg shadow">
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
            <li className="flex items-center">
              <FaCheckCircle className="text-[#0A66A3] mr-2" /> Professional Trained Team
            </li>
            <li className="flex items-center">
              <FaCheckCircle className="text-[#0A66A3] mr-2" /> High-Quality Materials
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
