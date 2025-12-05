import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    quote:
      "“Angel Packers & Movers provided outstanding service. Their team packed everything safely and completed my home relocation without a single scratch. Highly reliable!”",
    name: "Amit Verma",
    role: "Home Shifting",
  },
  {
    id: 2,
    quote:
      "“Very professional and punctual. My office shifting was completed smoothly and the team handled equipment with great care. Highly recommended!”",
    name: "Shruti Kulkarni",
    role: "Office Relocation",
  },
  {
    id: 3,
    quote:
      "“Their packing quality is extremely good. All fragile items reached perfectly. Angel Packers & Movers truly lives up to their name.”",
    name: "Harsh Gupta",
    role: "Long Distance Move",
  },
  {
    id: 4,
    quote:
      "“Affordable, trustworthy, and fast. From packing to delivery, everything was handled very carefully. Great experience!”",
    name: "Pooja Sharma",
    role: "Local Shifting",
  },
  {
    id: 5,
    quote:
      "“I booked Angel Packers for my villa relocation. The team was well-trained and handled furniture and appliances with precision. Exceptional work!”",
    name: "Rajeev Menon",
    role: "Villa Shifting",
  },
  {
    id: 6,
    quote:
      "“Their packaging material and techniques were impressive. The truck was sealed properly ensuring complete safety. Overall: 10/10 service.”",
    name: "Kiran & Meera",
    role: "Intercity Move",
  },
  {
    id: 7,
    quote:
      "“They handled our corporate files and systems very safely. Timely delivery and neat work. Definitely recommended for corporate moves.”",
    name: "Naveen Jain",
    role: "Corporate Shifting",
  },
  {
    id: 8,
    quote:
      "“Extremely budget-friendly with premium service quality. My goods arrived in perfect condition. Truly satisfied with Angel Packers & Movers.”",
    name: "Sneha Agarwal",
    role: "Local Move",
  },
  {
    id: 9,
    quote:
      "“Their team is exceptionally well-behaved and very trained. They packed all fragile items with extra care. Fantastic experience!”",
    name: "Vikas Thakur",
    role: "Household Shifting",
  },
];

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 3);

  return (
    <>
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-xs sm:text-sm uppercase tracking-wide text-[#0A66A3] font-semibold">
              Testimonials
            </p>
            <h2 className="mt-2 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0B0B0C]">
              What Customers Say About Angel Packers & Movers
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#0B0B0C] max-w-xl mx-auto opacity-80">
              Trusted for safe, fast, and secure relocations across India.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence>
              {visibleTestimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="relative bg-white rounded-lg shadow-md p-4 sm:p-5 text-center border border-[#BFC4C8] hover:shadow-lg hover:border-[#0A66A3] transition"
                >
                  {/* Badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-[#0A66A3] text-white text-xs font-bold shadow-md">
                      {t.id}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="mt-3 text-xs sm:text-sm text-[#0B0B0C] leading-relaxed italic">
                    {t.quote}
                  </p>

                  {/* Icon */}
                  <div className="mt-5 flex justify-center">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full border-2 border-dotted border-[#0A66A3] p-1 text-[#0A66A3] bg-[#F2F6FA]">
                      <FaUserCircle size={40} className="sm:w-12 sm:h-12" />
                    </div>
                  </div>

                  {/* Name + Role */}
                  <div className="mt-3">
                    <h3 className="text-xs sm:text-sm font-semibold text-[#0A66A3]">
                      {t.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-[#0B0B0C] opacity-70">
                      {t.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Load More Button */}
          {!showAll && (
            <div className="mt-10 text-center">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowAll(true)}
                className="cursor-pointer px-5 py-2 rounded-md bg-[#0A66A3] text-white text-sm font-semibold shadow-md hover:bg-[#084F7C] transition"
              >
                Load More
              </motion.button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
