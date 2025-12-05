"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { posts } from "@/lib/posts";
import LocationCarousel from "@/components/LocationCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import TreatmentCarousel from "@/components/TreatmentCarousel";
import TeamScroller from "@/components/TeamScroller";
import FAQ from "@/components/FAQ";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main
      className="space-y-16 pb-16 pt-0 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      aria-label="VR Physio Rehab homepage"
    >
      {/* HERO SECTION */}
      <HeroSection />

      {/* MISSION CARDS */}
      <section
        className="grid md:grid-cols-3 gap-4"
        aria-labelledby="mission-section-title"
      >
        <h2 id="mission-section-title" className="sr-only">
          What we serve, what we treat, and our mission
        </h2>
        {[
          {
            title: "What We Serve",
            desc: "Comprehensive Physiotherapy & Rehab for all age groups in Hyderabad.",
          },
          {
            title: "What We Treat",
            desc: "Ortho | Neuro | Sports | Women’s Health | Geriatric | Pediatric.",
          },
          {
            title: "Our Mission",
            desc: "Empowering movement with science, empathy, and measurable outcomes.",
          },
        ].map((c, i) => (
          <Card key={i} className="h-full">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                {c.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-gray-700">{c.desc}</CardContent>
          </Card>
        ))}
      </section>

      {/* ABOUT PREVIEW */}
      <section
        id="about"
        aria-labelledby="about-section-title"
        className="grid md:grid-cols-2 gap-8 items-center"
      >
        <div>
          <h2 id="about-section-title" className="text-2xl font-semibold">
            About VR Physio Rehab, Hyderabad
          </h2>
          <p className="mt-3 text-gray-700">
            VR Physio Rehab is a clinician-led physiotherapy and rehabilitation
            network in Hyderabad, focused on evidence-based care. From
            post-surgical rehab to VR-assisted neuro recovery, we design
            personalised programs to restore strength, range of motion, and
            confidence for every patient.
          </p>
          <p className="mt-2 text-gray-700">
            Our centres in areas like Jubilee Hills and across Hyderabad follow
            NABH-aligned protocols, advanced technology and one-to-one care
            planning.
          </p>
          <div className="mt-4">
            <Link href="/about">
              <Button variant="ghost" aria-label="Read more about VR Physio Rehab">
                Read More
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwse1tffo/image/upload/v1764081256/WhatsApp_Image_2025-11-25_at_19.09.59_90811aaf_vx4tcg.jpg"
            alt="Physiotherapist working with a patient in a clinic"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
          />
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section
        id="services"
        aria-labelledby="services-section-title"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
          <div>
            <h2 id="services-section-title" className="text-2xl font-semibold">
              Physiotherapy & Rehabilitation Services
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              End-to-end rehab services in-clinic, in-patient, and at home
              across Hyderabad.
            </p>
          </div>
          <Link href="/services" className="text-emerald text-sm font-medium">
            Explore Services →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            "Home Care Physiotherapy",
            "Out-Patient Ortho Physiotherapy",
            "In-Patient Rehabilitation",
            "Neuro & Cardio Rehab Programs",
            "Women’s Health & Pelvic Floor Care",
            "Sports Injury & Performance Care",
          ].map((s, i) => (
            <Card key={i} className="h-full">
              <CardContent className="py-4 text-sm font-medium text-gray-800">
                {s}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TREATMENT HIGHLIGHTS / CAROUSEL (if your component shows treatments) */}
      <section
        aria-labelledby="treatments-section-title"
        id="treatments"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
          <div>
            <h2 id="treatments-section-title" className="text-2xl font-semibold">
              Featured Treatments
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Advanced techniques for faster, safer recovery.
            </p>
          </div>
          <Link href="/treatments" className="text-emerald text-sm font-medium">
            View all treatments →
          </Link>
        </div>
        <TreatmentCarousel />
      </section>

      {/* CONDITIONS */}
      <section
        id="conditions"
        aria-labelledby="conditions-section-title"
      >
        <h2 id="conditions-section-title" className="text-2xl font-semibold mb-3">
          Conditions We Commonly Treat
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          From everyday pain to complex neuro and post-surgical conditions, our
          physiotherapists in Hyderabad manage a wide range of cases.
        </p>
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 text-gray-700">
          {[
            "Low back pain & sciatica",
            "Neck pain & cervical spondylosis",
            "ACL rehab & knee injuries",
            "Tennis elbow & wrist pain",
            "Frozen shoulder & rotator cuff injuries",
            "Cerebral palsy",
            "Stroke rehab (post-stroke recovery)",
            "Parkinson’s disease",
            "Osteoarthritis & joint pain",
            "Post-surgical recovery (TKR, THR, spine)",
            "Diastasis recti & core weakness",
            "Geriatric balance issues & falls",
          ].map((c) => (
            <li
              key={c}
              className="rounded-2xl border border-gray-200 bg-white p-3 text-sm"
            >
              {c}
            </li>
          ))}
        </ul>
      </section>

      {/* BLOG TEASERS */}
      <section
        id="blog"
        aria-labelledby="blog-section-title"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2 mb-4">
          <div>
            <h2 id="blog-section-title" className="text-2xl font-semibold">
              From Our Physiotherapy Blog
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Evidence-based tips on pain relief, posture, exercise and recovery.
            </p>
          </div>
          <Link href="/blog" className="text-emerald text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {posts.slice(0, 3).map((p) => (
            <Link
              key={p.slug}
              href={`/blog`}
              className="rounded-2xl border border-gray-100 bg-white shadow-soft overflow-hidden flex flex-col"
              aria-label={`Read blog: ${p.title}`}
            >
              <div className="relative h-64">
  <Image
    src={p.image}
    alt={p.title}
    fill
    className="object-cover"
    style={{ objectPosition: "center 28%" }} 
    sizes="(min-width: 1024px) 33vw, 100vw"
  />
</div>

              <div className="p-4 flex-1 flex flex-col">
                <div className="font-semibold text-sm">{p.title}</div>
                <p className="text-xs text-gray-600 mt-1 line-clamp-3">
                  {p.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* VR PILATES BANNER */}
      <section
        id="vr-pilates"
        aria-labelledby="vr-pilates-title"
        className="relative overflow-hidden rounded-2xl border border-gray-100 bg-emerald/10"
      >
        <div className="grid md:grid-cols-3 gap-6 p-6 md:p-8 items-center">
          <div className="md:col-span-2">
            <h2 id="vr-pilates-title" className="text-2xl font-semibold">
              Experience VR Pilates in Hyderabad
            </h2>
            <p className="mt-2 text-gray-700 text-sm">
              We blend Experience and care with classical Pilates to build core
              control, balance, posture and confidence in a safe, engaging
              environment — ideal for spine rehab, postural issues and
              controlled strengthening.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link href="/treatments">
                <Button size="sm">Learn More</Button>
              </Link>
              <Link href="/book-appointment">
                <Button size="sm" variant="outline">
                  Book a Demo Session
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative h-40 md:h-44 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1600&auto=format&fit=crop"
              alt="Patient performing Pilates exercises with guidance"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section
        id="why-us"
        aria-labelledby="why-us-section-title"
      >
        <h2 id="why-us-section-title" className="text-2xl font-semibold mb-4">
          Why Choose VR Physio Rehab?
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          A dedicated team of physiotherapists in Hyderabad, committed to
          clinical excellence and patient-centric outcomes.
        </p>
        <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            "Experienced Physiotherapists",
            "NABH-aligned Protocols",
            "One-to-One Personalized Care",
            "Advanced Rehab Equipment",
            "Evidence-Based Treatment Plans",
            "Outcome Tracking & Home Programs",
          ].map((w, i) => (
            <Card key={i} className="h-full">
              <CardContent className="py-4 text-sm font-medium text-gray-800">
                {w}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        id="testimonials"
        aria-labelledby="testimonials-section-title"
      >
        <h2 id="testimonials-section-title" className="text-2xl font-semibold mb-4">
          What Our Patients Say
        </h2>
        <TestimonialsCarousel />
      </section>

      {/* FAQ */}
      <section id="faq" aria-labelledby="faq-section-title">
        <h2 id="faq-section-title" className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <FAQ />
      </section>

      {/* TEAM */}
      <section id="team" aria-labelledby="team-section-title">
        <h2 id="team-section-title" className="text-2xl font-semibold mb-4">
          Our Physiotherapy Experts
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          Meet our team of specialised physiotherapists, neuro rehab experts,
          sports rehab specialists and women’s health therapists.
        </p>
        <TeamScroller />
      </section>

      {/* LOCATIONS */}
      <section
        id="locations"
        aria-labelledby="locations-section-title"
      >
        <h2 id="locations-section-title" className="text-2xl font-semibold mb-4">
          Our Physiotherapy Centres in Hyderabad
        </h2>
        <LocationCarousel />
      </section>

      {/* CONTACT */}
<section
  id="contact"
  aria-labelledby="contact-section-title"
  className="grid md:grid-cols-2 gap-8"
>
  <div>
    <h2 id="contact-section-title" className="text-2xl font-semibold mb-4">
      Get In Touch
    </h2>
    <p className="text-gray-700 mb-4 text-sm">
      Have questions about your condition, treatment plan, or appointments?
      Share your details and our team will call you back.
    </p>

    <ContactForm />  {/* ← USE THIS */}
  </div>

        <div className="flex flex-col gap-3">
          <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-soft h-full">
            <iframe
              src="https://www.google.com/maps?q=Jubilee%20Hills%20Hyderabad&output=embed"
              width="100%"
              height="350"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="VR Physio Rehab Jubilee Hills map location"
            ></iframe>
          </div>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:vrphysiorehab@gmail.com"
                className="underline underline-offset-2"
              >
                vrphysiorehab@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+917794921287"
                className="underline underline-offset-2"
              >
                +91 77949 21287
              </a>
            </p>
            <p className="text-xs text-gray-500">
              Prefer WhatsApp? You can also message us for quick appointment
              booking and guidance.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
