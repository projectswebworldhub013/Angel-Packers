import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

import img1 from "../assets/images/hero/h1.jpg";
import img2 from "../assets/images/hero/h2.jpg";
import img3 from "../assets/images/hero/h3.jpg";
import img4 from "../assets/images/hero/h1.jpg";
import img5 from "../assets/images/hero/h2.jpg";

import logo from "../assets/images/logo.png";

// UPDATED SLIDES FOR ANGEL PACKERS AND MOVERS
const slides = [
  {
    image: img1,
    title: ["RELOCATION MADE EASY"],
    description:
      "From packing to delivery, Angel Packers & Movers ensures a smooth and stress-free moving experience with complete professionalism and care.",
  },
  {
    image: img2,
    title: ["SAFE & SECURE PACKING"],
    description:
      "Your belongings are handled with industry-grade packing materials and expert techniques to ensure total safety throughout the journey.",
  },
  {
    image: img3,
    title: ["HOUSEHOLD SHIFTING EXPERTS"],
    description:
      "We specialize in doorstep-to-doorstep residential shifting with precision, careful handling, and timely delivery.",
  },
  {
    image: img4,
    title: ["OFFICE & COMMERCIAL MOVING"],
    description:
      "Angel Packers & Movers executes corporate relocations with efficiency, ensuring minimal downtime and maximum safety.",
  },
  {
    image: img5,
    title: ["LONG DISTANCE TRANSPORTATION"],
    description:
      "With strong logistics, trained teams, and secure transport, we ensure a smooth moving experience across cities and states.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const current = slides[index];

  return (
    <div className="relative w-full h-[90vh] overflow-hidden bg-black">

      {/* TOP LEFT BRAND LABEL */}
      <div className="absolute top-6 left-6 z-[40] flex items-center gap-3">
        <img src={logo} alt="Angel Packers Logo" className="w-10 h-10 object-contain" />
        <p className="text-sm tracking-wide text-white" style={{ fontFamily: "Italiana, serif" }}>
          ANGEL PACKERS & MOVERS
        </p>
      </div>

      {/* TOP RIGHT STATEMENT */}
      <div className="absolute top-6 right-6 z-[40] flex items-center gap-2 text-white text-xs md:text-sm">
        <FaRegStar className="text-[#0A66A3]" />
        <p className="max-w-xs">
          Trusted relocation solutions with{" "}
          <span className="text-[#0A66A3] font-semibold"> safety, reliability, and care.</span>
        </p>
      </div>

      {/* BACKGROUND SLIDES */}
      <AnimatePresence>
        <motion.img
          key={index}
          src={current.image}
          className="absolute w-full h-full object-cover"
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.85, opacity: 0 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      {/* DARK OVERLAY */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/55"></div>

      {/* MAIN CONTENT */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index + "-content"}
          className="absolute inset-0 flex items-center px-6 md:px-20"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">

            <h1
              className="text-white text-5xl md:text-6xl font-light leading-tight"
              style={{ fontFamily: "Italiana, serif" }}
            >
              {current.title.map((line, i) => (
                <span key={i} className="block text-white">{line}</span>
              ))}
            </h1>

            <p className="text-gray-200 mt-4 max-w-xl text-sm md:text-base line-clamp-2">
              {current.description}
            </p>

            <div className="mt-6">
              <Link to="/contact">
                <button className="border border-[#0A66A3] text-white px-6 py-2 text-sm tracking-wide hover:bg-[#0A66A3] transition-all duration-300">
                  GET A QUOTE →
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
