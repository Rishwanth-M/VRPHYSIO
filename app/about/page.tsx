import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TeamScroller from "@/components/TeamScroller";

export const metadata = {
  title: "About VR Physio Rehab"
};

export default function AboutPage() {
  return (
    <div className="py-8 space-y-14">

      {/* HERO SECTION */}
      <header className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <div className="relative h-56 md:h-72">
          <Image
            src="https://res.cloudinary.com/dwse1tffo/image/upload/v1764823900/WhatsApp_Image_2025-12-01_at_14.03.16_009a4302_ahivj0.jpg"
            alt="VR Physio Rehab"
            fill
            className="object-cover object-[50%_30%]"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold">Move Better. Heal Smarter.</h1>
          <p className="text-gray-700 text-lg mt-2">
            Combining modern physiotherapy, advanced technology, and personalised care to help you live pain-free.
          </p>
        </div>
      </header>

      {/* STORY SECTION */}
      <section className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold">Our Story</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
    VR Physio Rehab was founded by <b>Dr. Venkat, PT</b>, who previously worked at <b>Apollo Hospital, Jubilee Hills, Hyderabad, India</b> in various departments. The clinic was established with a single mission — to bring world-class, ethical, <b>research-based</b> physiotherapy to every individual in South India. What started as a small clinic has evolved into a center known for evidence-based rehabilitation, cutting-edge VR therapy, and disciplined Pilates training. <b>We follow international standards like JCI and are integrated with NABH guidelines.</b>
</p>

          <p className="mt-3 text-gray-700 leading-relaxed">
            Every patient at VR Physio Rehab receives a customised treatment pathway —
            whether it’s post-surgical care, chronic pain rehab, neurological recovery,
            women’s health, or performance training.
          </p>
        </div>

        <div className="relative h-64 rounded-2xl overflow-hidden">
          <Image
            src="https://res.cloudinary.com/dwse1tffo/image/upload/v1764081256/WhatsApp_Image_2025-11-25_at_19.09.59_90811aaf_vx4tcg.jpg"
            alt="VR Physio Clinic"
            fill
            className="object-cover object-[50%_30%]"
          />
        </div>
      </section>

      {/* MISSION VISION VALUES */}
      <section className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: "Mission",
            desc: "To empower every individual to regain strength, mobility, and confidence through ethical, science-driven physiotherapy."
          },
          {
            title: "Vision",
            desc: "To become South India’s most trusted physiotherapy and rehabilitation network, driven by innovation and compassion."
          },
          {
            title: "Values",
            desc: "Safety, Respect, Evidence-based Care, Transparency, Empathy, and Continuous Improvement."
          }
        ].map((c, i) => (
          <Card key={i} className="shadow-sm hover:shadow-md transition">
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">{c.desc}</CardContent>
          </Card>
        ))}
      </section>

      {/* WHY CHOOSE US */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Why Patients Trust VR Physio Rehab</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700 list-disc pl-5 leading-relaxed">
          <li>International-grade assessment & rehabilitation protocols</li>
          <li>Dedicated VR-based treatment for balance, gait, and chronic pain</li>
          <li>Skilled physiotherapists with clinical expertise across specialties</li>
          <li>Structured post-operative rehabilitation (ACL, TKR, spine, shoulder)</li>
          <li>Women’s health physiotherapy with private, comfortable spaces</li>
          <li>Sports injury rehab with return-to-sport programming</li>
          <li>Pilates studio with Reformer, Ladder Barrel & Mat-based systems</li>
          <li>Clear communication, realistic timelines, and ethical care</li>
        </ul>
      </section>

      {/* DIRECTOR SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Meet Our Founder</h2>
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-md">
            <div className="relative w-full h-[400px] overflow-hidden">
  <Image
    src="https://res.cloudinary.com/dwse1tffo/image/upload/v1765075882/WhatsApp_Image_2025-12-06_at_13.42.00_96b80924_ubx50d.jpg"
    alt="Dr. Venkat PT"
    fill
    className="object-contain translate-y-18 scale-150 translate-x-4"
/>
</div>

          </div>
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold">Dr. Venkat PT</h3>
            <h4>MPT (ORTHO), MIAP</h4>
            <p className="mt-2 text-gray-700">
              A renowned physiotherapist with 17+ years of clinical expertise in orthopaedics,
              sports medicine, spine rehabilitation, manual therapy, and post-surgical care.
            </p>

            <p className="mt-2 text-gray-700">
              Dr. Venkat leads the clinical team with a deep belief in education, movement science,
              and outcome-driven therapy. He has consulted over <strong>5000+ patients </strong> 
               and continues to bring global physiotherapy principles into local practice.
            </p>

            <ul className="mt-3 text-gray-700 list-disc pl-5 space-y-1">
              <li>NABH-aligned rehabilitation protocols</li>
              <li>Expertise in ACL rehab, shoulder instability & spine care</li>
              <li>Mentor to junior physiotherapists and students</li>
              <li>Advocate for evidence-based and ethical physiotherapy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Meet Our Physiotherapy Team</h2>
        <p className="text-gray-700 mb-4">
          A multidisciplinary team of skilled physiotherapists dedicated to providing
          high-quality care, personalised treatment, and compassionate support.
        </p>

        <TeamScroller /> {/* ← Team scroller integrated here */}
      </section>

      {/* STATISTICS SECTION */}
      <section className="grid md:grid-cols-4 gap-4 text-center">
        {[
          { label: "Patients Treated", value: "5000+" },
          { label: "Clinical Experience", value: "17+ Years" },
          { label: "Specialised Programs", value: "20+" },
          { label: "Cities Served", value: "5 States" }
        ].map((s, i) => (
          <div
            key={i}
            className="p-5 bg-emerald/5 border border-emerald/20 rounded-2xl"
          >
            <p className="text-3xl font-bold text-emerald">{s.value}</p>
            <p className="text-gray-700 mt-1">{s.label}</p>
          </div>
        ))}
      </section>

      {/* APPROACH SECTION */}
      <section>
        <h2 className="text-2xl font-semibold mb-3">Our Approach to Rehabilitation</h2>
        <p className="text-gray-700 leading-relaxed">
          We follow a structured and personalised rehabilitation model:
        </p>

        <ol className="mt-3 pl-5 list-decimal space-y-2 text-gray-700">
          <li>Detailed assessment & diagnosis</li>
          <li>Patient education & clear treatment planning</li>
          <li>Manual therapy & mobility restoration</li>
          <li>Strength training & functional conditioning</li>
          <li>VR-based balance & motor learning sessions</li>
          <li>Pilates for posture, stability & core control</li>
          <li>Regular progress tracking & outcome measurement</li>
        </ol>
      </section>

    </div>
  );
}
