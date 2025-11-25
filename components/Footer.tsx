import Link from "next/link";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 bg-gray-50">
      <div className="container-responsive grid md:grid-cols-5 gap-8 py-10">
        
        {/* BRAND */}
        <div>
          <h4 className="font-semibold mb-3 text-charcoal">VR Physio Rehab</h4>
          <p className="text-sm text-gray-600">Move Better. Heal Smarter.</p>
          <p className="mt-3 text-sm text-gray-600">
            Email: <a className="text-emerald" href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="text-sm text-gray-600">
            Phone: <a className="text-emerald" href={`tel:${site.phone}`}>{site.phone}</a>
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="font-semibold mb-3 text-charcoal">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-emerald">Home</Link></li>
            <li><Link href="/about" className="hover:text-emerald">About</Link></li>
            <li><Link href="/services" className="hover:text-emerald">Services</Link></li>
            <li><Link href="/treatments" className="hover:text-emerald">Treatments</Link></li>
            <li><Link href="/book-appointment" className="hover:text-emerald">Book Appointment</Link></li>
          </ul>
        </div>

        {/* LOCATIONS */}
        <div>
          <h4 className="font-semibold mb-3 text-charcoal">Locations</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://www.google.com/maps/dir//Aditya+Ellen+Plaza,+Women+and+Children+Hospital,+VR+Physio+%26+Rehab+Femcity:,+Shaikpet+Rd,+opp.+D-Mart,+Hyderabad,+Telangana+500096"
                target="_blank"
                className="hover:text-emerald"
              >
                Femcity Hospital – Shaikpet (Main)
              </a>
            </li>

            <li>
              <a
                href="https://www.google.com/maps/dir//phase-3,+Pramila+Enclave,+Moti+Nagar,+Erragadda,+Hyderabad,+Telangana+500114"
                target="_blank"
                className="hover:text-emerald"
              >
                Dr. Naveen Reddy Hospital – Erragadda
              </a>
            </li>
          </ul>
        </div>

        {/* POLICIES */}
        <div>
          <h4 className="font-semibold mb-3 text-charcoal">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy" className="hover:text-emerald">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-emerald">Terms & Conditions</Link></li>
            <li><Link href="/patient-rights" className="hover:text-emerald">Patient Rights</Link></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-3 text-charcoal">Follow Us</h4>
          <ul className="space-y-2 text-sm">
            <li><a href={site.socials.instagram} target="_blank" className="hover:text-emerald">Instagram</a></li>
            <li><a href={site.socials.facebook} target="_blank" className="hover:text-emerald">Facebook</a></li>
            <li><a href={site.socials.linkedin} target="_blank" className="hover:text-emerald">LinkedIn</a></li>
            <li><a href={site.socials.youtube} target="_blank" className="hover:text-emerald">YouTube</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-600">
        © 2025 VR Physio Rehab – All Rights Reserved.
      </div>
    </footer>
  );
}
