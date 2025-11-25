"use client";
import Image from "next/image";

const members = [
  {
    name: "Dr. Puranik Shraddha ",
    role: "Physiotherapy Consultant",
    img: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763795336/IMG-20251120-WA0010_nn1aqa.jpg"
  },
  {
    name: "Dr. Palyam Sonujishi",
    role: "Physiotherapy Consultant",
    img: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763795336/IMG-20251120-WA0013_qr0z7w.jpg"
  },
  {
    name: "Dr. Azmeera Srilatha ",
    role: "Physiotherapy Consultant",
    img: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763795336/IMG-20251120-WA0012_pkmutm.jpg"
  },
  {
    name: "Dr. Thudum Srilatha",
    role: "Physiotherapy Consultant",
    img: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763795337/IMG-20251120-WA0009_kfavui.jpg"
  },
  {
    name: "Dr. Pilli Manipriya",
    role: "Physiotherapy Consultant",
    img: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763795336/IMG-20251120-WA0011_xy4ho8.jpg"
  },
  {
    name: "Dr. Gadikota Bramhananda Reddy",
    role: "Physiotherapy Consultant",
    img: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763909264/WhatsApp_Image_2025-11-22_at_12.42.16_70dafeb7_rnez5t.jpg"
  },
];

export default function TeamScroller() {
  return (
    <div className="overflow-x-auto no-scrollbar py-2">
      <div className="flex gap-5 min-w-max">
        {members.map((m, i) => (
          <div
            key={i}
            className="min-w-[230px] bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition overflow-hidden"
          >
            <div className="relative h-44 w-full">
              <Image
                src={m.img}
                alt={`${m.name} - Physiotherapist`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="font-semibold text-gray-900">{m.name}</p>
              <p className="text-sm text-gray-600">{m.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
