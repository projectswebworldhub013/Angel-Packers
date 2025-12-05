import React from "react";
import { motion } from "framer-motion";
import { FaTruckMoving } from "react-icons/fa";
import { MdSecurity, MdOutlineSupportAgent } from "react-icons/md";
import img1 from "../assets/images/who.jpg";
import { Link } from "react-router-dom";

export default function WhoWeAre2() {
  return (
    <section
      id="who-we-are"
      className="w-full bg-white py-12 sm:py-16 px-4 sm:px-6 lg:px-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* LEFT IMAGE */}
        <motion.div
          className="w-full h-[280px] sm:h-[350px] md:h-[420px] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <img
            src={img1}
            alt="Angel Packers and Movers"
            className="w-full h-full object-cover rounded-2xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* TOP LABEL */}
          <p className="text-[#0A66A3] font-semibold mb-2 uppercase tracking-wide text-xs sm:text-sm">
            About Us
          </p>

          {/* MAIN TITLE */}
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-snug text-[#0B0B0C] mb-4">
            Reliable & Trusted  
            <span className="text-[#0A66A3]"> Packers & Movers </span>  
            Across India
          </h2>

          {/* SHORT DESCRIPTION */}
          <p className="text-[#333333] mb-6 text-sm sm:text-base leading-relaxed">
            Angel Packers and Movers delivers safe, smooth, and affordable relocation 
            services across India. With trained staff, high-quality packing materials, and 
            modern loading tools, we ensure stress-free shifting for homes, offices, 
            vehicles, and more.
          </p>

          {/* FEATURES */}
          <ul className="space-y-3 mb-8">
            <li className="flex items-center gap-3">
              <MdSecurity className="text-[#0A66A3] text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base text-[#0B0B0C]">
                Professional & Secure Packing
              </span>
            </li>

            <li className="flex items-center gap-3">
              <FaTruckMoving className="text-[#0A66A3] text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base text-[#0B0B0C]">
                Fast Door-to-Door Relocation
              </span>
            </li>

            <li className="flex items-center gap-3">
              <MdOutlineSupportAgent className="text-[#0A66A3] text-lg sm:text-xl flex-shrink-0" />
              <span className="text-sm sm:text-base text-[#0B0B0C]">
                24×7 Customer Support & Assistance
              </span>
            </li>
          </ul>

          {/* BUTTON */}
          <Link to="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0A66A3] text-white px-6 py-3 rounded-lg font-semibold 
              shadow-md hover:bg-[#084F7C] transition-all duration-300 text-sm sm:text-base"
            >
              Get Free Quote
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
