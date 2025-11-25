"use client";
import { useState, useEffect, useRef, TouchEvent } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react"; // uses lucide icons (already available in your project)

const data = [
  {
    name: "Arjun K.",
    text: "Recovered from ACL surgery with confidence. Personalized care was superb!",
    rating: 5,
  },
  {
    name: "Sneha P.",
    text: "VR Pilates helped my chronic back pain. Gentle yet effective.",
    rating: 5,
  },
  {
    name: "Rahul S.",
    text: "Friendly team, advanced equipment and fast results.",
    rating: 4,
  },
  {
    name: "Meera T.",
    text: "Home visits were a lifesaver for my grandmother’s rehab.",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setI((prev) => (prev + 1) % data.length);
    }, 4500);
  };

  const stopAuto = () => intervalRef.current && clearInterval(intervalRef.current);

  useEffect(() => {
  startAuto();
  return () => {
    stopAuto(); // always returns void
  };
}, []);


  // ⭐ Swipe logic
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAuto();
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) setI((prev) => (prev + 1) % data.length); // Swipe Left → Next
    if (diff < -50) setI((prev) => (prev - 1 + data.length) % data.length); // Swipe Right → Prev

    startAuto();
  };

  const renderStars = (count: number) =>
    [...Array(5)].map((_, idx) => (
      <Star
        key={idx}
        className={`h-5 w-5 ${
          idx < count ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <div
      className="relative rounded-2xl border border-gray-100 p-8 sm:p-10 bg-white shadow-soft text-center max-w-xl mx-auto select-none"
      onMouseEnter={stopAuto}
      onMouseLeave={startAuto}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        {/* Star Rating */}
        <div className="flex justify-center gap-1 mb-3">
          {renderStars(data[i].rating)}
        </div>

        {/* Review Text */}
        <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
          “{data[i].text}”
        </p>

        {/* Reviewer Name */}
        <p className="mt-4 font-semibold text-gray-900">
          — {data[i].name}
        </p>
      </motion.div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {data.map((_, idx) => (
          <div
            key={idx}
            className={`h-2 w-2 rounded-full transition ${
              idx === i ? "bg-emerald" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
