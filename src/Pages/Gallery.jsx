// src/pages/GalleryPage.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import GalleryHero from "../Components/GalleryHero";

// Gallery Images
import img1 from "../assets/images/showcase/s1.jpg";
import img2 from "../assets/images/showcase/s2.jpg";
import img3 from "../assets/images/showcase/s3.jpg";
import img4 from "../assets/images/showcase/s4.jpg";
import img5 from "../assets/images/showcase/s5.jpg";
import img6 from "../assets/images/showcase/s6.jpg";
import img7 from "../assets/images/showcase/s7.jpg";
import img8 from "../assets/images/showcase/s8.jpg";
import img9 from "../assets/images/showcase/s9.jpg";
import img10 from "../assets/images/showcase/s10.jpg";
import img11 from "../assets/images/showcase/s11.jpg";
import img12 from "../assets/images/showcase/s12.jpg";
import img13 from "../assets/images/showcase/s13.jpg";
import img14 from "../assets/images/showcase/s14.jpg";
import img15 from "../assets/images/showcase/s15.jpg";
import img16 from "../assets/images/showcase/one.jpg";

export default function Gallery() {
  const images = [
    { src: img1 }, { src: img2 }, { src: img3 }, { src: img4 },
    { src: img5 }, { src: img6 }, { src: img7 }, { src: img8 },
    { src: img9 }, { src: img10 }, { src: img11 }, { src: img12 },
    { src: img13 }, { src: img14 }, { src: img15 }, { src: img16 }
  ];

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleClose = () => setSelectedIndex(null);
  const handlePrev = () =>
    setSelectedIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  const handleNext = () =>
    setSelectedIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex !== null) {
        if (e.key === "ArrowLeft") handlePrev();
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "Escape") handleClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  return (
    <>
      <GalleryHero />

      {/* Gallery Section */}
      <section className="w-full py-12 px-6" style={{ backgroundColor: "#FFFFFF" }}>
        <div className="max-w-7xl mx-auto text-center" id="gallery">

          {/* Heading */}
          <div className="flex items-center justify-center mb-8">
            <div className="h-[2px] w-16 bg-gradient-to-r from-[#0A66A3] to-[#0B0B0C]"></div>
            <h2 className="text-3xl md:text-4xl font-bold mx-6 leading-snug" style={{ color: "#0B0B0C" }}>
              Angel Packers & Movers{" "}
              <span className="block" style={{ background: "linear-gradient(90deg, #0A66A3, #0B0B0C)", WebkitBackgroundClip: "text", color: "transparent" }}>
                Gallery of Excellence
              </span>
            </h2>
            <div className="h-[2px] w-16 bg-gradient-to-l from-[#0A66A3] to-[#0B0B0C]"></div>
          </div>

          <p className="max-w-2xl mx-auto mb-12 text-base md:text-lg" style={{ color: "#0B0B0C" }}>
            Discover our fleet, packing techniques, and professional moving setups. Each image reflects our dedication to{" "}
            <span style={{ color: "#0A66A3" }} className="font-semibold">
              safety
            </span>{" "}
            and{" "}
            <span style={{ color: "#0B0B0C" }} className="font-semibold">
              reliable service
            </span>
            .
          </p>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6" id="gallery">
            {images.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition rounded-xl"
                onClick={() => setSelectedIndex(index)}
                style={{ backgroundColor: "#FFFFFF", border: "1px solid #BFC4C8" }}
              >
                <img
                  src={item.src}
                  alt={`Gallery-${index + 1}`}
                  className="w-full h-52 sm:h-60 md:h-64 object-cover rounded-xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Popup Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 z-50 backdrop-blur-lg flex items-center justify-center p-6"
            style={{ backgroundColor: "rgba(0,0,0,0.75)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-6 right-6 text-white p-3 rounded-full shadow-lg hover:scale-110 transition"
              style={{ background: "linear-gradient(90deg, #0A66A3, #0B0B0C)" }}
            >
              <X size={26} />
            </button>

            {/* Image Slider */}
            <motion.div
              className="relative max-w-5xl w-full rounded-2xl shadow-2xl border p-4"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                borderColor: "#BFC4C8",
                background: "#FFFFFF",
              }}
            >
              <motion.img
                key={selectedIndex}
                src={images[selectedIndex].src}
                alt={`Gallery-${selectedIndex + 1}`}
                className="w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />

              {/* Prev/Next Buttons */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 -left-12 -translate-y-1/2 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
                style={{ background: "linear-gradient(90deg, #0A66A3, #0B0B0C)" }}
              >
                <ChevronLeft size={20} />
              </button>

              <button
                onClick={handleNext}
                className="absolute top-1/2 -right-12 -translate-y-1/2 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
                style={{ background: "linear-gradient(90deg, #0A66A3, #0B0B0C)" }}
              >
                <ChevronRight size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
