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

// UPDATED SLIDES WITH LONGER SUBHEADINGS
const slides = [
  {
    image: img1,
    title: ["RELOCATION MADE EASY"],
    description:
      "Angel Packers & Movers provides a smooth relocation experience with expert packing, safe loading, GPS-enabled transport, and professional handling at every step. Enjoy stress-free shifting with a team that truly understands your moving needs.",
  },
  {
    image: img2,
    title: ["SAFE & SECURE PACKING"],
    description:
      "We use premium-grade packing materials, multi-layer protection, and trained manpower to safeguard your valuables. Every item is packed with extra care to prevent scratches, dents, or damage during transportation.",
  },
  {
    image: img3,
    title: ["HOUSEHOLD SHIFTING EXPERTS"],
    description:
      "From local home shifting to complete interstate relocation, our team ensures safe handling of furniture, appliances, fragile items, and personal belongings with absolute precision and timely delivery.",
  },
  {
    image: img4,
    title: ["OFFICE & COMMERCIAL MOVING"],
    description:
      "We manage corporate relocations with efficiency and zero downtime. Our services include IT equipment shifting, file/document relocation, workstation transport, and complete setup assistance at the new location.",
  },
  {
    image: img5,
    title: ["LONG DISTANCE TRANSPORTATION"],
    description:
      "With strong logistics strength, well-maintained vehicles, and skilled drivers, we ensure safe and seamless long-distance relocation across all major cities, towns, and states in India.",
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
      <div className="hidden md:flex absolute -top-3 left-20 z-[40] flex items-center gap-3">
        <img
          src={logo}
          alt="Angel Packers Logo"
          className=" w-44 h-44 object-contain drop-shadow-xl" // ⬅ Increased size
        />
        <p
          className="text-sm md:text-base tracking-wide text-white"
          style={{ fontFamily: "Italiana, serif" }}
        >
          {/* ANGEL PACKERS & MOVERS */}
        </p>
      </div>

      {/* TOP RIGHT STATEMENT */}
      <div className="absolute top-6 right-6 z-[40] flex items-center gap-2 text-white text-xs md:text-sm">
        <FaRegStar className="text-[#0A66A3]" />
        <p className="max-w-xs md:max-w-sm">
          Trusted relocation services with{" "}
          <span className="text-[#0A66A3] font-semibold">safety, reliability, and expert handling.</span>
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

            {/* HEADING */}
            <h1
              className="text-white text-4xl md:text-6xl font-light leading-tight"
              style={{ fontFamily: "Italiana, serif" }}
            >
              {current.title.map((line, i) => (
                <span key={i} className="block text-white">
                  {line}
                </span>
              ))}
            </h1>

            {/* RICH SUBHEADING TEXT */}
            <p className="text-gray-200 mt-5 max-w-2xl text-base md:text-lg leading-relaxed"> 
              {current.description}
            </p>

            {/* BUTTON */}
            <div className="mt-7">
              <Link to="/contact">
                <button className="cursor-pointer border border-[#0A66A3] bg-white text-black px-7 py-3 text-sm md:text-base tracking-wide hover:bg-[#0A66A3] transition-all duration-300 shadow rounded-full">
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
