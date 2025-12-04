// src/components/FloatingButtons.jsx
import React, { useState } from "react";
import { FaPhoneAlt, FaWhatsapp, FaTimes, FaMailBulk } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FloatingButtons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-4">

      {/* Floating Buttons */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* CALL BUTTON (Blue Gradient) */}
            <motion.a
              key="call"
              href="tel:+918006885800"
              title="Call Angel Packers"
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ duration: 0.3 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-gradient-to-br from-[#0A66A3] to-[#004B75] text-white
                shadow-2xl ring-2 ring-white/20 transition-transform duration-300
                hover:scale-110 hover:rotate-6"
            >
              <FaPhoneAlt size={22} />
            </motion.a>

            {/* WHATSAPP BUTTON (Kept Original WhatsApp Colors) */}
            <motion.a
              key="whatsapp"
              href="https://wa.me/+918006885800"
              target="_blank"
              rel="noopener noreferrer"
              title="Chat on WhatsApp"
              initial={{ opacity: 0, y: 20, scale: 0 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="w-14 h-14 flex items-center justify-center rounded-full
                bg-gradient-to-br from-green-500 to-green-600 text-white
                shadow-2xl ring-2 ring-white/20 transition-transform duration-300
                hover:scale-110 hover:-rotate-6"
            >
              <FaWhatsapp size={26} />
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* MAIN TOGGLE BUTTON */}
      <div className="relative">

        {/* Ripple Rings Updated to Brand Colors */}
        <span className="absolute inset-0 rounded-full bg-[#0A66A3]/40 animate-ping-slow"></span>
        <span className="absolute inset-0 rounded-full bg-[#0A66A3]/20 animate-ping-slower"></span>
        <span className="absolute inset-0 rounded-full bg-white/60 animate-ping-slowest"></span>

        <motion.button
          onClick={toggleButtons}
          whileTap={{ scale: 0.9 }}
          className="cursor-pointer relative w-14 h-14 md:w-16 md:h-16 rounded-full
            bg-gradient-to-br from-[#0A66A3] to-[#004B75]
            flex items-center justify-center text-white
            shadow-2xl overflow-hidden hover:scale-105 transition-all duration-300"
        >
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaMailBulk size={22} />
          )}
        </motion.button>
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 0.7; }
          80% { transform: scale(2); opacity: 0; }
          100% { opacity: 0; }
        }
        .animate-ping-slow {
          animation: pingSlow 3s linear infinite;
        }
        .animate-ping-slower {
          animation: pingSlow 4s linear infinite;
        }
        .animate-ping-slowest {
          animation: pingSlow 5s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingButtons;
