"use client";
import { useState, useEffect, useRef, TouchEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const heroImages = [
    "https://res.cloudinary.com/dwse1tffo/image/upload/v1763796321/IMG-20251120-WA0006_qcgjus.jpg",
    "https://res.cloudinary.com/dwse1tffo/image/upload/v1763796490/IMG-20251122-WA0013_hw8mux.jpg",
    "https://res.cloudinary.com/dwse1tffo/image/upload/v1763796489/IMG-20251122-WA0001_aspmz7.jpg",
    "https://res.cloudinary.com/dwse1tffo/image/upload/v1763796351/IMG-20251107-WA0019_q65kv7.jpg",
    "https://res.cloudinary.com/dwse1tffo/image/upload/v1763914569/IMG-20251030-WA0004_apc7uu.jpg",
  ];

  const [imgIndex, setImgIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);

  useEffect(() => {
  startAutoSlide();
  return () => {
    stopAutoSlide(); // always returns void
  };
}, []);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(
      () => setImgIndex((i) => (i + 1) % heroImages.length),
      4500
    );
  };

  const stopAutoSlide = () => intervalRef.current && clearInterval(intervalRef.current);

  // Swipe gesture
  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
    stopAutoSlide();
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextImg(); // swipe left -> next
    if (diff < -50) prevImg(); // swipe right -> prev
    startAutoSlide();
  };

  const nextImg = () => setImgIndex((i) => (i + 1) % heroImages.length);
  const prevImg = () =>
    setImgIndex((i) => (i - 1 + heroImages.length) % heroImages.length);

  return (
    <section
      className="relative overflow-hidden rounded-2xl mt-6"
      aria-label="Hero section - VR Physio Rehab Hyderabad"
    >
      {/* Soft background blend */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="absolute inset-0 bg-gradient-to-br from-emerald/20 via-white to-emerald/10 pointer-events-none"
      />

      <div className="relative grid md:grid-cols-2 gap-8 p-8 md:p-12">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Best Physiotherapy in Hyderabad
          </h1>

          <p className="mt-3 text-lg text-gray-700 font-medium">
            Move Better. Heal Smarter.
          </p>

          <p className="mt-4 text-gray-700 max-w-lg">
            VR Physio Rehab provides expert physiotherapy & rehabilitation —
            Ortho, Neuro, Sports, Women’s Health, Geriatric & Pediatric care
            with evidence-based treatment and one-to-one care.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Link href="/book-appointment">
              <Button size="lg" aria-label="Book physiotherapy appointment">
                Book Appointment
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline">
                Explore Services
              </Button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE SLIDER */}
        <div
          className="relative h-72 md:h-auto rounded-2xl overflow-hidden select-none"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={imgIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0"
            >
              <Image
                src={heroImages[imgIndex]}
                alt="Physiotherapy treatment session"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              {/* Dark overlay for better text contrast */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/30 via-transparent to-black/20" />
            </motion.div>
          </AnimatePresence>

          {/* Clickable Dots Nav */}
          <div className="absolute bottom-3 right-3 flex gap-2 z-10">
            {heroImages.map((_, i) => (
              <button
                key={i}
                onClick={() => setImgIndex(i)}
                aria-label={`Show image ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  i === imgIndex
                    ? "bg-white w-5"
                    : "bg-white/60 w-2 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
