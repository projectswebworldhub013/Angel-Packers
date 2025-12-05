// src/components/ContactPage.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

import bgContact from "../assets/images/bg2.avif";
import ContactHero from "../Components/ContactHero";
import MapSection from "../Components/MapSection";

const ContactPage = () => {
  return (
    <>
      <ContactHero />

      <section className="w-full min-h-screen flex flex-col lg:flex-row font-sans bg-white text-[#0B0B0C]">
        
        {/* LEFT SECTION */}
        <motion.div
          id="contact"
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 px-6 sm:px-12 lg:px-20 py-16 flex flex-col justify-between"
        >
          <div className="flex flex-col justify-between h-full">

            {/* Heading */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 border-b-4 border-[#0A66A3] inline-block pb-2 uppercase text-[#0A66A3]">
                Get In Touch
              </h1>

              <p className="text-base sm:text-lg font-medium text-[#0B0B0C] mb-10">
                Need assistance with your relocation?
                At <span className="font-semibold text-[#0A66A3]">Angel Packers & Movers</span>,
                we make your move safe, smooth, and stress-free.  
                Contact us anytime for support or a free moving quote.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 text-sm sm:text-base">

                {/* Phone */}
                <div>
                  <h4 className="font-bold text-[#0A66A3]">Phone</h4>
                  <p>+91 80068 85800</p>
                </div>

                {/* Email */}
                <div>
                  <h4 className="font-bold text-[#0A66A3]">Email</h4>
                  <p>info@angelpackersandmovers.co.in</p>
                </div>

                {/* Address */}
                <div>
                  <h4 className="font-bold text-[#0A66A3]">Address</h4>
                  <p>
                    Plot No. 92, Ground Floor, Gali No. 7, Rambag Colony,  
                    Ramghat Road, Nearby Quarsi Chouraha,  
                    Aligarh, Uttar Pradesh – 202001, India
                  </p>
                </div>

                {/* GSTIN */}
                <div>
                  <h4 className="font-bold text-[#0A66A3]">GSTIN</h4>
                  <p>09BCWPK6595B1ZY</p>
                </div>

                {/* UDYAM */}
                <div>
                  <h4 className="font-bold text-[#0A66A3]">UDYAM</h4>
                  <p>UDYAM-UP-02-0064073</p>
                </div>

              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-4 text-lg text-[#0B0B0C]">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66A3] transition"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66A3] transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66A3] transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66A3] transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://g.co/kgs/r2fkBAb"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#0A66A3] transition"
              >
                <FaMapMarkerAlt />
              </a>
            </div>

          </div>
        </motion.div>

        {/* RIGHT SECTION - FORM */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 relative flex items-center justify-center"
        >
          
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${bgContact})` }}
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#0B0B0C]/70"></div>

          {/* FORM */}
          <form
            action="https://formsubmit.co/info@angelpackersandmovers.co.in"
            method="POST"
            className="relative z-10 w-full px-6 sm:px-12 lg:px-20 py-16 text-white"
          >
            <h3 className="text-xl font-semibold mb-6 border-b-2 border-[#0A66A3] pb-1 inline-block uppercase">
              Contact Form
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />

              <input
                type="text"
                name="phone"
                placeholder="Phone"
                required
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="bg-transparent border-b border-white p-2 focus:outline-none text-white placeholder-gray-300"
              />

              <textarea
                name="message"
                placeholder="Your moving requirements"
                required
                className="col-span-1 sm:col-span-2 bg-transparent border-b border-white p-2 focus:outline-none resize-none h-24 text-white placeholder-gray-300"
              ></textarea>

              <button
                type="submit"
                className="cursor-pointer col-span-1 sm:col-span-2 bg-[#0A66A3] hover:bg-[#084F7C] text-white font-semibold py-3 mt-4 transition-all duration-300 rounded-full"
              >
                Send Message
              </button>
            </div>

            {/* Hidden Inputs for FormSubmit */}
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_next"
              value="https://angelpackersandmovers.co.in/"
            />
          </form>
        </motion.div>
      </section>

      <MapSection />
    </>
  );
};

export default ContactPage;
