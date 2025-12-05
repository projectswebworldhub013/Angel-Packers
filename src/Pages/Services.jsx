// src/pages/Services.jsx
import React from "react";
import servicesData from "../data/servicesData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ServicesHero from "../Components/ServicesHero";

export default function Services() {
  // Truncate utility
  const truncateText = (text, maxLength) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <>
      <ServicesHero />

      <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#FFFFFF]">
        {/* Title Section */}
        <div id="services-list" className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold text-[#0A66A3] mb-4">
            Our <span className="text-[#0B0B0C]">Premium Services</span>
          </h1>

          <p className="text-[#0B0B0C] max-w-2xl mx-auto leading-relaxed">
            At <span className="font-semibold text-[#0A66A3]">Angel Packers & Movers</span>, 
            we specialize in fast, secure, and affordable relocation solutions. 
            Whether it's household shifting, office relocation, vehicle transport, or storage services — 
            we ensure a **smooth, damage-free, and hassle-free moving experience** across India.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {servicesData.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFFFF] border border-[#BFC4C8]/40 rounded-xl shadow-lg 
                hover:shadow-2xl transition-all duration-300 overflow-hidden 
                w-full max-w-sm flex flex-col"
              >
                {/* Image */}
                <div className="h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transform hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-[#0A66A3] text-3xl mb-4">
                    <Icon className="text-[#0A66A3]" />
                    <h2 className="ml-3 text-lg font-semibold text-[#0B0B0C]">
                      {service.name}
                    </h2>
                  </div>

                  <p className="text-[#0B0B0C] text-sm flex-grow leading-relaxed">
                    {truncateText(service.description, 90)}
                  </p>

                  <Link
                    to={service.path}
                    className="mt-6 inline-block bg-[#0A66A3] text-white py-2 px-5 rounded-lg font-semibold 
                    hover:bg-[#084F7C] transition duration-300 text-center shadow-md"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
}
