// src/components/Footer.jsx
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaEnvelope,
  FaSearchLocation,
  FaHome,
  FaPhoneAlt,
  FaImage,
  FaInfoCircle,
  FaTruckMoving,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaCertificate,
  FaBoxOpen,
  FaPeopleCarry,
  FaExchangeAlt,
  FaCarSide,
  FaMotorcycle,
  FaDog,
  FaDolly,
  FaCodeBranch,
} from "react-icons/fa";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import bgImg from "../assets/images/bg.jpg";
import VisitorCounter from "./VisitorCounter";
import Translator from "./Translator";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// Services List
const servicesData = [
  { name: "Packers And Movers Service", path: "/services/packers-and-movers", icon: FaPeopleCarry },
  { name: "Movers And Packers Service", path: "/services/movers-and-packers", icon: FaTruckMoving },
  { name: "Relocation Service", path: "/services/relocation", icon: FaExchangeAlt },
  { name: "Household Shifting Service", path: "/services/household-shifting", icon: FaBoxOpen },
  { name: "Shifting Service", path: "/services/shifting", icon: FaPeopleCarry },
  { name: "Transport Service", path: "/services/transport", icon: FaTruckMoving },
  { name: "Car Transport Service", path: "/services/car-transport", icon: FaCarSide },
  { name: "Bike Transport Service", path: "/services/bike-transport", icon: FaMotorcycle },
  { name: "Pet Transport Service", path: "/services/pet-transport", icon: FaDog },
  { name: "Loading Unloading Service", path: "/services/loading-unloading", icon: FaDolly },
  { name: "Packing Unpacking Service", path: "/services/packing-unpacking", icon: FaBoxOpen },
  { name: "Packaging Unpackaging Service", path: "/services/packaging-unpackaging", icon: FaBoxOpen },
];

export default function Footer() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [inView, controls]);

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
      className="relative text-[#0B0B0C] bg-white pt-20 pb-10 px-6 md:px-16 overflow-hidden font-sans font-semibold"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-sm">

        {/* -------- ABOUT -------- */}
        <div className="flex flex-col space-y-3">
          <h4 className="font-bold mb-2 text-3xl text-[#0A66A3] font-[italiana]">
            About Angel Packers & Movers
          </h4>
          <p className="leading-relaxed text-[#0B0B0C]">
            Angel Packers & Movers is one of India’s most trusted relocation brands, 
            offering safe, reliable and professional packing and moving solutions. 
            With expert handling, quality packaging, and timely delivery, we ensure 
            a smooth and stress-free moving experience for families and businesses.
          </p>

          <div className="mt-4 space-y-1 text-[#0B0B0C] text-xs">
            <p>ISO Certified Company</p>
            <p>Govt. Registered Packers & Movers</p>
            <p>Professional & Experienced Team</p>
          </div>
        </div>

        {/* -------- QUICK LINKS -------- */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#0A66A3] font-[italiana]">
            Quick Links
          </h4>
          <ul className="space-y-2 text-[#0B0B0C]">
            {[
              ["Home", "/", <FaHome />],
              ["About Us", "/about", <FaInfoCircle />],
              ["Services", "/services", <FaTruckMoving />],
              ["Branches", "/locations", <FaCodeBranch />],
              ["Gallery", "/gallery", <FaImage />],
              ["Certificates", "/certificates", <FaCertificate />],
              ["Contact Us", "/contact", <FaPhoneAlt />],
            ].map(([text, link, icon], i) => (
              <li key={i}>
                <Link
                  to={link}
                  className="flex items-center gap-2 hover:text-[#0A66A3] transition duration-300"
                >
                  {icon} {text}
                </Link>
              </li>
            ))}
          </ul>

          {/* Email */}
          <h4 className="mt-6 font-bold text-2xl text-[#0A66A3] font-[italiana]">
            Email
          </h4>
          <ul className="mt-2 space-y-2 text-[#0B0B0C] text-sm">
            <li>
              <a
                href="mailto:info@angelpackersandmovers.co.in"
                className="flex items-center space-x-2 hover:text-[#0A66A3] transition duration-300"
              >
                <FaEnvelope className="text-[#0A66A3]" />
                <span>info@angelpackersandmovers.co.in</span>
              </a>
            </li>
          </ul>
        </div>

        {/* -------- SERVICES -------- */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#0A66A3] font-[italiana]">
            Our Services
          </h4>

          <ul className="space-y-2 text-[#0B0B0C]">
            {servicesData.map(({ name, path, icon: Icon }, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-[#0A66A3] transition duration-300 flex items-center gap-2"
                >
                  <Icon className="text-[#0A66A3]" /> {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* -------- CONTACT -------- */}
        <div>
          <h4 className="font-bold text-2xl mb-4 text-[#0A66A3] font-[italiana]">
            Contact Info
          </h4>

          <address className="not-italic leading-relaxed mb-4 text-[#0B0B0C] text-sm">
            <strong>Head Office:</strong><br />
            Plot No. 92, Ground Floor, Gali No. 7,  
            Rambag Colony, Ramghat Road,  
            Nearby Quarsi Chouraha,  
            Aligarh, Uttar Pradesh – 202001, India
          </address>

          <p className="text-sm text-[#0B0B0C] mb-2">
            <FaPhoneAlt className="inline mr-2 text-[#0A66A3]" /> +91 80068 85800
          </p>

          <div className="mb-4 flex">
            <Translator />
            <div className="w-42 md:w-16"></div>
          </div>

          <div className="mt-6 flex space-x-4">
            {[FaInstagram, FaFacebookF, FaYoutube, FaTwitter, FaLinkedinIn, FaPinterestP, FaSearchLocation].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#0A66A3] hover:text-[#0B0B0C] transition"
                >
                  <Icon size={20} />
                </a>
              )
            )}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 text-center text-xs text-[#0B0B0C] border-t border-[#BFC4C8] pt-6 space-y-2 relative z-10">
        <VisitorCounter />
        <p>
          © {new Date().getFullYear()} Angel Packers and Movers. All rights reserved.
        </p>
        <p>
          Designed by{" "}
          <a
            href="https://webworldhub.co.in"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:text-[#0A66A3] transition"
          >
            Web World Hub
          </a>
        </p>
      </div>
    </motion.footer>
  );
}
