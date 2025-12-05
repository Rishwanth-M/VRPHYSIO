"use client";
import { useState, useEffect, useRef, TouchEvent } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

// ⭐ Real Google-style reviews
const data = [
  {
    name: "B Suresh Kumar",
    text: "I underwent PCL and partial meniscectomy surgery. Home physiotherapy from VR Physio Rehab helped me recover extremely well.",
    rating: 5,
  },
  {
    name: "Gadikota Bramha Reddy",
    text: "I visited for my rotator cuff injury. My shoulder pain reduced a lot and mobility improved significantly within a few sessions.",
    rating: 5,
  },
  {
    name: "Anuradha Devi",
    text: "Dr. Venkat treated me and my mom with great care. His experience and approach made a huge difference in our recovery.",
    rating: 5,
  },
  {
    name: "Anantha Sarma",
    text: "After my total knee replacement for both knees, VR Physio Rehab helped me walk confidently again. Excellent physiotherapy.",
    rating: 5,
  },
  {
    name: "Bujji",
    text: "Venkat garu did a fabulous job for my ACL rehab. He supported me even after treatment and boosted my confidence.",
    rating: 5,
  },
  {
    name: "Charles Antony",
    text: "Very professional physiotherapy service. Venkat explains everything clearly and ensures safe, steady progress.",
    rating: 5,
  },
  {
    name: "Jhansi Alluri",
    text: "We used Venkat’s services for my mother’s knee replacement rehab. Extremely patient, skilled and encouraging.",
    rating: 5,
  },
  {
    name: "C Priyanka",
    text: "Very good team with excellence in treating patients. Strongly recommend VR Physio Rehab!",
    rating: 5,
  },
];

export default function TestimonialsCarousel() {
  const [i, setI] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  // ⭐ Auto Slide
  const startAuto = () => {
    intervalRef.current = setInterval(() => {
      setI((prev) => (prev + 1) % data.length);
    }, 4500);
  };

  const stopAuto = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, []);

  // ⭐ Manual Buttons
  const next = () => setI((prev) => (prev + 1) % data.length);
  const prev = () =>
    setI((prev) => (prev - 1 + data.length) % data.length);

  // ⭐ Swipe logic
  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    stopAuto();
  };

  const handleTouchEnd = (e: TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    if (diff < -50) prev();
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
      {/* Left Button */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-50"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Right Button */}
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white shadow hover:bg-gray-50"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Animated Review */}
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="flex justify-center gap-1 mb-3">
          {renderStars(data[i].rating)}
        </div>

        <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
          “{data[i].text}”
        </p>

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
