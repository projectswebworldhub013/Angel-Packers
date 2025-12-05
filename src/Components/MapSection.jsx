// src/components/MapSection.jsx
import React from "react";
import { motion } from "framer-motion";

export default function MapSection() {
  return (
    <section className="relative w-full py-20 px-6 md:px-12 lg:px-20 bg-gradient-to-b from-[#FFFFFF] to-[#F9FAFB] font-sans overflow-hidden">

      {/* Decorative Background Circles */}
      <div className="absolute top-28 -left-24 w-64 h-64 bg-[#0A3D91]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 -right-28 w-72 h-72 bg-[#E53935]/10 rounded-full blur-3xl"></div>

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0A3D91] mb-4 tracking-tight">
          Find Us on the Map
        </h2>
        <p className="text-[#333333] text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Easily locate Angel Packers & Movers in Aligarh.  
          We are always available to assist with your moving needs.
        </p>
      </motion.div>

      {/* Map Section Only */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#0A3D91]/60"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d112827.69730437464!2d78.08867855000001!3d27.906099249999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3974a548d1363667%3A0x6cd172142cf739e2!2sno%207%2C%20Gali%2C%20Ramghat%20Rd%2C%20Telephone%20Colony%2C%20Rambag%20Colony%2C%20Aligarh%2C%20Uttar%20Pradesh%20202001!3m2!1d27.904066!2d78.1029952!5e0!3m2!1sen!2sin!4v1764957685381!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "400px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Angel Packers & Movers Location"
        ></iframe>
      </motion.div>

    </section>
  );
}
