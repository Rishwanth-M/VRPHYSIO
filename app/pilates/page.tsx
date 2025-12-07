"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";



const benefits = [
  "Improves posture, spinal alignment and body awareness",
  "Builds deep core strength and stability",
  "Reduces neck, back and hip strain from long sitting",
  "Supports recovery from injuries & post-surgical rehab",
  "Enhances balance, flexibility and coordination",
  "Helps manage chronic pain with controlled movement",
  "Boosts athletic performance and movement efficiency",
  "Safe and low-impact for all age groups"
];

const whoIsItFor = [
  "Professionals with neck, shoulder and back pain",
  "Post-surgical patients (spine, knee, hip, shoulder)",
  "Mothers in prenatal or postnatal recovery",
  "Athletes and dancers needing control & stability",
  "Individuals with poor posture or core weakness",
  "Elderly seeking safe strength and balance training",
  "People with recurrent injuries or movement fear"
];

const classTypes = [
  {
    title: "Mat Pilates",
    desc: "Fundamental Pilates sequences performed on the mat, focusing on breath, alignment, control and core activation. Ideal for beginners and those building a strong foundation."
  },
  {
    title: "Reformer Pilates",
    desc: "Uses the Pilates Reformer machine with springs, straps and a moving carriage to provide resistance-based training for strength, flexibility and joint control."
  },
  {
    title: "Ladder Barrel Pilates",
    desc: "Targets the spine, hips and core using curved barrel support and ladder rungs. Excellent for posture correction, spinal mobility and controlled extension work."
  },
  {
    title: "Clinical Rehab Pilates",
    desc: "Condition-specific Pilates designed by physiotherapists for post-surgery cases, chronic pain, spine issues, shoulder instability and sports injuries."
  },
  {
    title: "Pre and Postnatal Pilates",
    desc: "Pre and Postnatal Pilates focuses on safe, controlled movements that strengthen the core, improve posture, and support the physical changes during and after pregnancy."
  },
  {
    title: "Performance & Conditioning Pilates",
    desc: "For athletes, runners and fitness enthusiasts looking to enhance performance, prevent injuries and improve movement efficiency through structured Pilates training."
  }
];

const faqs = [
  {
    q: "Do I need to be flexible or fit to start Pilates?",
    a: "No. Pilates is suitable for beginners, seniors, post-op patients and those who have not exercised for years. We start at your current level and gradually build strength, control and flexibility."
  },
  {
    q: "Is Pilates safe if I have back or neck pain?",
    a: "Yes, when supervised by a physiotherapist. Clinical Pilates is designed to support the spine, improve core stability and reduce load on painful structures. We modify movements based on your condition and reports."
  },
  {
    q: "What is the difference between normal Pilates and clinical Pilates?",
    a: "Clinical Pilates is guided by a physiotherapist who understands your diagnosis, scans and pain patterns. Exercises are selected and progressed scientifically, not generically, and are integrated into your rehabilitation plan."
  },
  {
    q: "How often should I do Pilates to see results?",
    a: "Most people feel a difference in 4–6 sessions. For best results, we usually recommend 2–3 sessions per week for the first 4–6 weeks, along with a short home program."
  },
  {
    q: "What should I wear and bring for a Pilates session?",
    a: "Wear comfortable, stretchable clothing (no jeans), grip socks if available, and bring your recent reports if you are recovering from surgery or injury. We provide all equipment at the studio."
  }
];

export default function PilatesPage() {
  return (
    <div className="py-8 space-y-14">
      {/* HERO */}
      <header className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <div className="relative h-52 md:h-72">
          <Image
            src="https://res.cloudinary.com/dwse1tffo/image/upload/v1764088537/trainer-pilates-woman-yoga-logo-identity-vector_rtyj6m.jpg"
            alt="Pilates at VR Physio Rehab"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6 md:p-8">
          <h1 className="text-3xl md:text-4xl font-bold">
            Pilates at VR Physio Rehab
          </h1>
          <p className="text-gray-700 mt-2 max-w-3xl text-base md:text-lg">
            Experience clinical Pilates with Reformer, Ladder Barrel and Mat
            sessions — designed by physiotherapists to improve posture, core strength,
            stability and confidence in movement.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/book-appointment">
              <Button size="lg">Book a Pilates Assessment</Button>
            </Link>
            <Link
              href="/treatments"
              className="text-emerald text-sm md:text-base flex items-center"
            >
              View all treatments →
            </Link>
          </div>
        </div>
      </header>

      {/* WHAT IS PILATES */}
      <section className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-semibold">What is Clinical Pilates?</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Pilates is a controlled movement system that focuses on core strength, spinal
            alignment, breath and mindful control. At VR Physio Rehab, we practice{" "}
            <strong>clinical Pilates</strong> — which means every session is guided or
            supervised by physiotherapists who understand your diagnosis, posture and pain
            patterns.
          </p>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Whether you are recovering from an injury, surgery, pregnancy, chronic pain or
            simply want to move better, Pilates helps you build a strong, stable and mobile
            body without high impact or heavy strain on the joints.
          </p>
        </div>
        <div className="relative h-64 rounded-2xl overflow-hidden">
          <Image
    src="https://res.cloudinary.com/dwse1tffo/image/upload/v1765074612/WhatsApp_Image_2025-12-06_at_06.27.36_37ed9b41_fcuphq.jpg"
    alt="Clinical Pilates"
    fill
    className="object-contain"
/>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Benefits of Pilates</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Pilates is not just about looking fit — it is about building a resilient body
            that can handle work, life and sport. It integrates breath, control and strength
            to create long-term stability and mobility.
          </p>
          <ul className="mt-4 text-gray-700 space-y-2 list-disc pl-5">
            {benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">Who Is Pilates For?</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            Our Pilates programs are tailored for rehabilitation, prevention and performance:
          </p>
          <ul className="mt-4 text-gray-700 space-y-2 list-disc pl-5">
            {whoIsItFor.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* CLASS TYPES / FORMATS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Pilates Formats at VR Physio Rehab</h2>
        <p className="text-gray-700 max-w-3xl">
          We offer a combination of equipment-based and mat-based Pilates so that your
          sessions can be adapted to your goals — from pain relief and rehab to posture
          correction and performance enhancement.
        </p>

        <div className="grid md:grid-cols-3 gap-5">
          {classTypes.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm p-4 flex flex-col"
            >
              <h3 className="font-semibold text-base md:text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed flex-1">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* VR PILATES HIGHLIGHT */}
      <section className="relative overflow-hidden rounded-2xl border border-gray-100 bg-emerald/10 p-6 md:p-10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">VR Pilates at VR Physio Rehab</h2>
            <p className="mt-2 text-gray-700 leading-relaxed">
              At VR Physio Rehab, our Pilates program focuses on building core strength, posture correction, flexibility, and mindful movement. Pilates is one of the most effective low-impact systems for improving alignment and reducing pain.
            </p>
            <p className="mt-2 text-gray-700">
              Our physiotherapists personalize each Pilates session to your condition—whether it’s back pain, neck pain, postural issues, sports rehab, or general fitness. The goal is to help you move better, feel stronger, and stay injury-free.
            </p>
            <div className="mt-4">
              <Link href="/book-appointment" className="text-emerald font-medium">
                Book a VR Pilates trial session →
              </Link>
            </div>
          </div>

          <div className="relative h-44 md:h-56 rounded-2xl overflow-hidden">
  <Image
    src="https://res.cloudinary.com/dwse1tffo/image/upload/v1763797044/IMG-20251122-WA0003_brfmvu.jpg"
    alt="VR Pilates"
    fill
    className="object-cover object-[center_30%]"
  />
          </div>
        </div>
      </section>

      {/* HOW A SESSION WORKS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">How a Pilates Session Works</h2>
        <ol className="list-decimal pl-5 space-y-2 text-gray-700 leading-relaxed">
          <li>Initial assessment of posture, pain, mobility and strength by a physiotherapist.</li>
          <li>Goal setting: pain relief, posture, core strength, rehab, fitness or performance.</li>
          <li>Selection of appropriate formats (Mat, Reformer, Ladder Barrel, VR, or a mix).</li>
          <li>Guided, hands-on coaching during each session with correction and feedback.</li>
          <li>Home exercises or stretches, when needed, for better continuity.</li>
          <li>Regular reassessment to track progress and adjust your program.</li>
        </ol>
      </section>

      {/* FAQ SECTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Pilates FAQs</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="rounded-2xl border border-gray-100 bg-white p-4"
            >
              <summary className="font-semibold cursor-pointer text-gray-900">
                {f.q}
              </summary>
              <p className="mt-2 text-sm text-gray-700 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="text-center space-y-3">
        <h2 className="text-2xl font-semibold">
          Ready to Start Your Pilates Journey?
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Whether you are in pain, recovering from surgery, or simply want to move better,
          our physiotherapist-led Pilates programs are designed to be safe, effective and
          personalised.
        </p>
        <div className="flex justify-center gap-3 mt-3">
          <Link href="/book-appointment">
            <Button size="lg" className="px-8">
              Book a Pilates Assessment
            </Button>
          </Link>
          <a href="tel:+917794921287" className="text-emerald mt-2">
  Have questions? Talk to our team →
</a>

        </div>
      </section>
    </div>
  );
}
