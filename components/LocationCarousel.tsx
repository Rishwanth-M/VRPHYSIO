"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const slides = [
  {
    title: "VR Physio Rehab – Femcity Hospital, Shaikpet (Main Branch)",
    image:
      "https://res.cloudinary.com/dwse1tffo/image/upload/v1763915799/Femcity_m2m5q3.webp",
    link:
      "https://www.google.com/maps/dir//Aditya+Ellen+Plaza,+Women+and+Children+Hospital,+VR+Physio+%26+Rehab+Femcity:,+Shaikpet+Rd,+opp.+D-Mart,+Hyderabad,+Telangana+500096/@17.4303351,78.3273238,15z"
  },
  {
    title: "VR Physio Rehab – Dr. Naveen Reddy Hospital, Erragadda",
    image:
      "https://res.cloudinary.com/dwse1tffo/image/upload/v1763915798/Dr_naveen_reddy_sanathnagar_ryicg8.webp",
    link:
      "https://www.google.com/maps/dir//phase-3,+Pramila+Enclave,+Moti+Nagar,+Erragadda,+Hyderabad,+Telangana+500114/"
  }
];

export default function LocationCarousel() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((index + 1) % slides.length);
  const prev = () => setIndex((index - 1 + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-2xl shadow-soft border border-gray-100">
      <a
        href={slides[index].link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="h-56 md:h-72 w-full bg-cover bg-center flex items-end cursor-pointer"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="w-full bg-black/45 text-white p-4 text-center text-sm md:text-base">
            {slides[index].title}
          </div>
        </motion.div>
      </a>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-3 py-1.5 shadow"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next"
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 rounded-full px-3 py-1.5 shadow"
      >
        ›
      </button>
    </div>
  );
}