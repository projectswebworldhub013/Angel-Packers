import React from "react";
import personImg from "../assets/images/hero/h2.jpg";
import personImg2 from "../assets/images/hero/h3.jpg";

import {
  FaTruckMoving,
  FaBoxOpen,
  FaMapMarkedAlt,
  FaSmileBeam,
} from "react-icons/fa";

import { motion } from "framer-motion";

const stats = [
  {
    icon: <FaTruckMoving className="text-[#0A66A3] text-3xl" />,
    value: "12,000+",
    label: "Successful Moves",
  },
  {
    icon: <FaBoxOpen className="text-[#0A66A3] text-3xl" />,
    value: "9,500+",
    label: "Homes & Offices Packed",
  },
  {
    icon: <FaMapMarkedAlt className="text-[#0A66A3] text-3xl" />,
    value: "28+",
    label: "Cities Covered",
  },
  {
    icon: <FaSmileBeam className="text-[#0A66A3] text-3xl" />,
    value: "98%",
    label: "Happy Customers",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const StatsSection = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* ================= LEFT CONTENT ================= */}
        <div className="space-y-6">
          {/* Section Tag */}
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#0A66A3] font-semibold tracking-wide uppercase text-sm"
          >
            Why Choose Us
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C] leading-tight"
          >
            Making Your Shifting<br />
            <span className="text-[#0A66A3]">Safer, Faster & Stress-Free</span>
          </motion.h2>

          {/* Sub Text */}
          <p className="text-[#4A4A4A] text-sm md:text-base leading-relaxed max-w-lg">
            At <strong>Angel Packers & Movers</strong>, every relocation is handled
            with care, precision, and trust. From premium packaging materials to
            secure transportation and timely delivery—our team ensures a
            completely smooth moving experience for families, offices, and
            businesses.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8 pt-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 group transition-transform duration-300"
                whileHover={{ y: -4, scale: 1.03 }}
              >
                <div>{stat.icon}</div>

                <div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-[#0A66A3] group-hover:text-[#084f80] transition-colors duration-300">
                    {stat.value}
                  </h3>
                  <p className="text-[#666666] text-sm">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT IMAGE + TESTIMONIAL ================= */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={personImg}
            alt="Customer Experience"
            className="rounded-2xl w-full object-cover shadow-xl transition-transform duration-500 hover:scale-[1.015]"
          />

          {/* Testimonial */}
          <div className="absolute bottom-[-20px] left-6 bg-white rounded-xl shadow-lg p-4 w-[90%] max-w-xs border-l-4 border-[#0A66A3] backdrop-blur-md bg-opacity-90">
            <p className="text-sm text-[#4A4A4A] italic mb-2 leading-relaxed">
              “Angel Packers & Movers made our shifting completely worry-free.
              Their packaging quality, behaviour, and professionalism were simply outstanding.”
            </p>

            <div className="flex items-center gap-2 mt-2">
              <img
                src={personImg2}
                alt="Customer"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="text-sm">
                <p className="font-semibold text-[#0B0B0C]">Rakesh Kumar</p>
                <p className="text-[#999] text-xs">Verified Customer</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
