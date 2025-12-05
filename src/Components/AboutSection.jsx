import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving, FaBoxes, FaSmile } from "react-icons/fa";
import aboutImg from "../assets/images/bg5.avif"; 
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="w-full py-16 px-6 md:px-12 lg:px-20 bg-[#F8F8F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-3xl shadow-xl relative z-10"
        >
          {/* Heading */}
          <h2 className="text-[#0B0B0C] text-2xl md:text-3xl lg:text-4xl font-extrabold leading-snug">
            About{" "}
            <span className="text-[#0A66A3]">Angel Packers & Movers</span>
          </h2>

          {/* Subtext */}
          <p className="mt-4 tracking-wider text-[#4B5563] text-base md:text-lg">
            <span className="font-semibold text-[#0A66A3]">
              Angel Packers & Movers
            </span>{" "}
            is a trusted relocation partner delivering safe, smooth, and
            reliable shifting services. Whether it's household relocation, office
            shifting, or vehicle transportation, our trained team ensures a{" "}
            <span className="font-semibold text-[#0B0B0C]">
              secure, hassle-free, and timely move.
            </span>
          </p>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#0A66A3] hover:bg-[#074E7A] text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300"
          >
            Get a Free Quote
          </motion.button>

          {/* Stats */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="bg-[#BFC4C8]/40 rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <FaTruckMoving className="text-[#0A66A3] text-3xl mx-auto mb-3 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0C]">
                10+ Yrs
              </h3>
              <p className="text-[#4B5563] text-sm mt-2">
                Industry <br /> Experience
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="bg-[#BFC4C8]/40 rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <FaBoxes className="text-[#0A66A3] text-3xl mx-auto mb-3 animate-bounce" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0C]">
                5000+
              </h3>
              <p className="text-[#4B5563] text-sm mt-2">
                Successful <br /> Moves
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#BFC4C8]/40 rounded-2xl shadow p-6 text-center hover:shadow-lg transition"
            >
              <FaSmile className="text-[#0A66A3] text-3xl mx-auto mb-3 animate-pulse" />
              <h3 className="text-xl md:text-2xl font-bold text-[#0B0B0C]">
                10K+
              </h3>
              <p className="text-[#4B5563] text-sm mt-2">
                Happy <br /> Customers
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full h-[250px] md:h-[520px] rounded-3xl overflow-hidden shadow-2xl group"
        >
          {/* Background Image */}
          <motion.img
            src={aboutImg}
            alt="About Angel Packers & Movers"
            className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

          {/* Floating Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition duration-1000"></div>

          {/* Floating Buttons */}
          <motion.div
            className="absolute top-4 right-4 flex gap-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-white px-4 py-2 rounded-full shadow hover:bg-[#F3F4F6] text-sm font-medium text-[#0B0B0C]"
              >
                Learn More
              </motion.button>
            </Link>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-[#0A66A3] text-white px-4 py-2 rounded-full shadow hover:bg-[#074E7A] text-sm font-medium"
              >
                Contact Us
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
