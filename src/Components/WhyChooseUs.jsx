import React from "react";
import {
  FaTruckMoving,
  FaShieldAlt,
  FaClock,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelopeOpen,
  FaCheckCircle,
} from "react-icons/fa";

import whybg from "../assets/images/bg1.jpg";

const aboutHighlights = [
  {
    id: "01",
    icon: <FaShieldAlt className="text-[#0A66A3] text-4xl drop-shadow-md" />,
    title: "Secure & Professional Handling",
    description:
      "Every item is packed with care using high-quality materials and modern loading tools.",
    features: ["Premium Packing", "Bubble Wrap Safety", "Expert Handlers"],
  },
  {
    id: "02",
    icon: <FaTruckMoving className="text-[#0A66A3] text-4xl drop-shadow-md" />,
    title: "Trusted Relocation Services",
    description:
      "From home shifting to office and vehicle transport, we ensure smooth and stress-free moves.",
    features: ["Door-to-Door Service", "All India Coverage", "Damage-Free Transport"],
  },
  {
    id: "03",
    icon: <FaClock className="text-[#0A66A3] text-4xl drop-shadow-md" />,
    title: "Timely & Hassle-Free Delivery",
    description:
      "Well-planned logistics and experienced staff ensure on-time relocation anywhere in India.",
    features: ["Fast Execution", "Live Updates", "Organized Team"],
  },
];

export default function WhyChooseUs() {
  return (
    <section
      className="relative overflow-hidden py-24 px-6 md:px-12 bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${whybg})` }}
    >
      {/* Soft white overlay */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="relative max-w-7xl mx-auto text-[#0B0B0C]">
        
        {/* HEADER SECTION */}
        <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
          
          {/* LEFT – About Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold text-[#0A66A3] leading-tight mb-6">
              About Angel Packers & Movers
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-[#0B0B0C]">
              Angel Packers & Movers is a trusted relocation company based in 
              Aligarh, offering safe, reliable, and affordable shifting services 
              across India. With expert staff, modern equipment, and years of 
              industry experience, we ensure smooth home, office, and vehicle 
              relocations from start to finish.
            </p>
          </div>

          {/* RIGHT – OWNER CARD */}
          <div className="bg-white/90 backdrop-blur-lg border border-[#BFC4C8] rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">

            {/* Owner Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-[#eaf2fa] shadow-md">
                <FaUserTie className="text-4xl text-[#0A66A3]" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-[#0A66A3]">
                  Pramod Kumar
                </h3>
                <p className="text-sm font-medium text-[#0B0B0C]">
                  Owner • Angel Packers & Movers
                </p>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-3 mb-5">
              <p className="flex items-center gap-3 text-[#0B0B0C]">
                <FaEnvelopeOpen className="text-[#0A66A3]" />
                Info@angelpackersandmovers.co.in
              </p>

              <p className="flex items-center gap-3 text-[#0B0B0C]">
                <FaPhoneAlt className="text-[#0A66A3]" />
                +91 80068 85800
              </p>
            </div>

            {/* Owner Quote */}
            <p className="text-lg text-[#0B0B0C] leading-relaxed italic">
              “We treat your belongings with the same care as our own — ensuring 
              100% safe, stress-free, and on-time relocation.”
            </p>

          </div>
        </div>

        {/* FEATURES / CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {aboutHighlights.map((item) => (
            <div
              key={item.id}
              className="relative group bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-xl 
              border border-[#d9dce0] rounded-2xl p-8 shadow-lg hover:shadow-2xl 
              transition-all duration-500 transform hover:-translate-y-3 hover:scale-[1.04]"
            >
              {/* Top Animated Accent Line */}
              <div className="absolute top-0 left-0 w-0 group-hover:w-full h-1 bg-[#0A66A3] rounded-t-2xl transition-all duration-500"></div>

              {/* Icon Circle */}
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-2xl 
              bg-[#f0f5fc] shadow-md group-hover:bg-[#e3edfa] transition-all duration-500">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-[#0A66A3] mb-3">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#0B0B0C] leading-relaxed mb-4">
                {item.description}
              </p>

              {/* EXTRA FEATURES */}
              <ul className="space-y-2">
                {item.features.map((f, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[#0B0B0C]">
                    <FaCheckCircle className="text-[#4FA9E6] text-lg" />
                    {f}
                  </li>
                ))}
              </ul>

              {/* Hover Border Animation */}
              <span className="absolute inset-0 rounded-2xl border-2 border-transparent 
              group-hover:border-[#0A66A3]/40 transition-all duration-500 pointer-events-none"></span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
