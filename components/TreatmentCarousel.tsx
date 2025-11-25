"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const items = [
  {
    title: "Orthopedic Physiotherapy & Musculoskeletal Rehab",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Orthopedic_Physiotherapy_Musculoskeletal_Rehab_knwjif.webp",
    href: "/treatments"
  },
  {
    title: "Neurological Rehabilitation",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Neurological_Rehabilitation_olqwox.webp",
    href: "/treatments"
  },
  {
    title: "Pediatric Physiotherapy",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Pediatric_Physiotherapy_vmth9z.jpg",
    href: "/treatments"
  },
  {
    title: "Geriatric Physiotherapy",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905899/Geriatric_Physiotherapy_wzibv5.webp",
    href: "/treatments"
  },
  {
    title: "Women’s Health Physiotherapy",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905903/Women_s_Health_Physiotherapy_jtxtzj.webp",
    href: "/treatments"
  },
  {
    title: "Pilates (Mat, Ladder Barrel & Reformer)",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905901/Pilates_Mat_Ladder_Barrel_Reformer_czg7dg.jpg",
    href: "/treatments"
  },
  {
    title: "Post-Surgical Rehabilitation",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905901/Post-Surgical_Rehabilitation_re2rca.jpg",
    href: "/treatments"
  },
  {
    title: "Injury & Pain Management",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Injury_Pain_Management_wcwcjl.jpg",
    href: "/treatments"
  },
  {
    title: "Dry Needling Therapy",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905899/Dry_Needling_Therapy_xxkmhj.jpg",
    href: "/treatments"
  },
  {
    title: "Manual Therapy",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905901/Manual_Therapy_ehvmfw.jpg",
    href: "/treatments"
  },
  {
    title: "Therapeutic Exercise",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905902/Therapeutic_Exercise_bxeect.jpg",
    href: "/treatments"
  },
  {
    title: "Electrotherapy & Modalities",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Electrotherapy_Modalities_dj1phr.jpg",
    href: "/treatments"
  }
];


export default function TreatmentCarousel() {
  const [i, setI] = useState(0);
  const next = () => setI((i+1)%items.length);
  const prev = () => setI((i-1+items.length)%items.length);

  const view = [items[i], items[(i+1)%items.length], items[(i+2)%items.length]];

  return (
    <div className="relative">
      <div className="grid md:grid-cols-3 gap-4">
        {view.map((t, idx) => (
          <motion.a
            key={idx}
            href={t.href}
            className="block rounded-2xl overflow-hidden border border-gray-100 shadow-soft bg-white"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
          >
            <div className="h-40 bg-cover bg-center" style={{ backgroundImage: `url(${t.image})` }} />
            <div className="p-4 font-medium">{t.title}</div>
          </motion.a>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={prev} className="px-4 py-2 rounded-2xl border border-emerald text-emerald hover:bg-emerald hover:text-white">‹ Prev</button>
        <button onClick={next} className="px-4 py-2 rounded-2xl border border-emerald text-emerald hover:bg-emerald hover:text-white">Next ›</button>
      </div>
    </div>
  );
}
