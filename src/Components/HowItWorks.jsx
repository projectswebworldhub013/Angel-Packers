import React from "react";
import {
  FaBoxOpen,
  FaClipboardCheck,
  FaTruckMoving,
  FaHandshake,
  FaCheck,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    title: "Request a Quote",
    description:
      "Share your moving details and receive a quick & transparent price estimate.",
    icon: <FaClipboardCheck className="text-5xl text-[#0A66A3] group-hover:text-white transition-all duration-500" />,
    extra:
      "Clear pricing with zero hidden charges — trust built from the first step.",
  },
  {
    id: 2,
    title: "Home / Office Survey",
    description:
      "Our experts assess items, packing needs, and vehicle size for smooth planning.",
    icon: <FaBoxOpen className="text-5xl text-[#0A66A3] group-hover:text-white transition-all duration-500" />,
    extra:
      "Right planning ensures a perfectly organized and stress-free relocation.",
  },
  {
    id: 3,
    title: "Safe Packing & Loading",
    description:
      "We use premium packing materials and trained staff for secure handling.",
    icon: <FaTruckMoving className="text-5xl text-[#0A66A3] group-hover:text-white transition-all duration-500" />,
    extra:
      "Handled with care following international safety standards.",
  },
  {
    id: 4,
    title: "Transport, Delivery & Unpacking",
    description:
      "Goods are safely delivered with unloading, placement, and unpacking support.",
    icon: <FaHandshake className="text-5xl text-[#0A66A3] group-hover:text-white transition-all duration-500" />,
    extra:
      "Your satisfaction completes our service — comfort guaranteed.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      
      {/* Section Header */}
      <div className="text-center mb-16 px-4">
        <p className="text-sm text-[#0A66A3] font-semibold uppercase tracking-widest">
          Fast • Safe • Professional
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0B0C] leading-tight">
          How Angel Packers & Movers Works
        </h2>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
        {steps.map((step, idx) => (
          <div
            key={step.id}
            className="relative group backdrop-blur-xl bg-white/70 border border-[#BFC4C8] rounded-2xl p-8 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 hover:bg-[#0A66A3] hover:text-white"
          >
            {/* Animated Connector Line */}
            <div className="absolute inset-x-0 top-0 h-1 scale-x-0 group-hover:scale-x-100 bg-[#0A66A3] group-hover:bg-white transition-all duration-500 origin-left rounded-full"></div>

            {/* Number Badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-[#0A66A3] bg-white text-[#0A66A3] font-bold text-base group-hover:bg-[#0A66A3] group-hover:text-white transition-all duration-500 shadow-md">
                <span className="group-hover:hidden">{idx + 1}</span>
                <FaCheck className="hidden group-hover:block text-white text-sm" />
              </div>
            </div>

            {/* Icon */}
            <div className="flex justify-center mb-6 mt-6 group-hover:scale-110 transition-all duration-500 cursor-pointer">
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="text-center font-bold text-xl mb-3 text-[#0B0B0C] group-hover:text-white transition-all duration-500">
              {step.title}
            </h3>

            {/* Description */}
            <p className="text-center text-[#6c757d] text-sm mb-3 group-hover:text-white transition-all duration-500">
              {step.description}
            </p>

            {/* Extra Info */}
            <p className="text-center text-gray-500 text-xs mb-8 group-hover:text-white/90 transition-all duration-500">
              {step.extra}
            </p>

            {/* CTA Button */}
            <div className="absolute left-1/2 -translate-x-1/2 bottom-4 w-full px-4">
              <div className="opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <Link to={"/about"}>
                  <button className="cursor-pointer w-full rounded-xl bg-[#0A66A3] group-hover:bg-white group-hover:text-[#0A66A3] text-white text-sm py-2 font-semibold shadow-md transition">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Final CTA */}
      <div className="mt-20 text-center px-6 max-w-4xl mx-auto">
        <p className="text-lg text-[#6c757d] font-medium mb-6">
          Your move deserves careful planning, professional handling, and complete safety —  
          Angel Packers & Movers delivers all three with trust, commitment, and excellence.
        </p>
        <Link to={"/contact"}>
          <button className="cursor-pointer bg-[#0A66A3] cursor-pointer text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#084f80] transition-all shadow-md">
            Book Your Move Now
          </button>
        </Link>
      </div>

    </section>
  );
};

export default HowItWorks;
