"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandLogo } from "./Brand";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/treatments", label: "Treatments" },
  { href: "/pilates", label: "Pilates" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <nav className="container-responsive flex items-center justify-between py-3">
        
        {/* LOGO */}
        <Link href="/" aria-label="VR Physio Rehab Home">
          <BrandLogo />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden p-2 text-2xl"
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  pathname === l.href
                    ? "text-emerald font-semibold"
                    : "text-charcoal hover:text-emerald"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/book-appointment">
              <Button size="sm">Book Appointment</Button>
            </Link>
          </li>
        </ul>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <ul className="container-responsive py-3 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-gray-800"
                >
                  {l.label}
                </Link>
              </li>
            ))}

            {/* MOBILE BOOK APPOINTMENT BUTTON */}
            <li>
              <Link
                href="/book-appointment"
                onClick={() => setOpen(false)}
              >
                <Button className="w-full">Book Appointment</Button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
