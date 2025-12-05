import React from "react";
import { FaTruckMoving, FaEye } from "react-icons/fa";
import bgImage from "../assets/images/bg3.avif"; // background image

const VisionMissionModern = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center text-black overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000bb] to-[#000000cc] z-0"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 space-y-24 text-center text-white">
        
        {/* -------------------- MISSION -------------------- */}
        <div className="space-y-8">
          {/* Animated Divider */}
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            <div className="w-24 h-[2px] bg-white animate-pulse"></div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <FaTruckMoving className="text-[#0A66A3] text-5xl drop-shadow-xl animate-pulse" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-wide text-white drop-shadow-lg">
            Our Mission
          </h2>

          {/* Mission Box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl max-w-4xl mx-auto">
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              At Angel Packers & Movers, our mission is to deliver{" "}
              <span className="text-[#0A66A3] font-semibold">
                safe, affordable, and seamless relocation solutions
              </span>{" "}
              for every customer. We aim to redefine the moving experience by
              ensuring proper packing, secure loading, and timely transportation
              for homes, offices, and vehicles across India.
              <br />
              <br />
              Our priority is to bring{" "}
              <span className="text-[#BFC4C8] font-semibold">
                trust, transparency, and guaranteed safety
              </span>{" "}
              to every move — giving customers complete peace of mind.
            </p>
          </div>
        </div>

        {/* -------------------- VISION -------------------- */}
        <div className="space-y-8">
          {/* Animated Divider */}
          <div className="flex items-center justify-center gap-4">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            <div className="w-24 h-[2px] bg-white animate-pulse"></div>
          </div>

          {/* Icon */}
          <div className="flex justify-center mb-4">
            <FaEye className="text-[#0A66A3] text-5xl drop-shadow-xl" />
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-semibold uppercase tracking-wide text-white drop-shadow-lg">
            Our Vision
          </h2>

          {/* Vision Box */}
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 md:p-10 shadow-2xl max-w-4xl mx-auto">
            <p className="text-gray-200 text-base md:text-lg leading-relaxed">
              Our vision is to make Angel Packers & Movers{" "}
              <span className="text-[#0A66A3] font-semibold">
                India’s most trusted relocation brand
              </span>
              , known for unmatched service quality, safety standards, and customer satisfaction.
              <br />
              <br />
              We aim to expand our network nationwide and build advanced relocation
              systems that make every move{" "}
              <span className="text-[#BFC4C8] font-semibold">
                faster, safer, and more efficient
              </span>
              .  
              <br />
              Our goal is to become a brand that people remember for{" "}
              <span className="text-[#0A66A3] font-semibold">
                reliability, professionalism, and care
              </span>{" "}
              — turning every relocation into a comfortable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionModern;
