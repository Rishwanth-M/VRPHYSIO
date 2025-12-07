import Image from "next/image";
import Link from "next/link";

const treatments = [
  {
    title: "Orthopedic Physiotherapy & Musculoskeletal Rehab",
    desc: "Focused rehabilitation for joint pain, spine issues, sports injuries, sprains, strains, fractures, arthritis and postural dysfunctions. Helps restore mobility, strength and functional movement.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Orthopedic_Physiotherapy_Musculoskeletal_Rehab_knwjif.webp",
    category: "Orthopedic Care"
  },
  {
    title: "Neurological Rehabilitation",
    desc: "Specialised therapy for stroke, Parkinson’s disease, spinal cord injury, neuropathy, balance loss and motor coordination issues. Enhances gait, balance and neuromuscular control.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Neurological_Rehabilitation_olqwox.webp",
    category: "Neurological Care"
  },
  {
    title: "Pediatric Physiotherapy",
    desc: "Gentle and structured therapy for developmental delays, cerebral palsy, coordination issues, low tone, high tone and gait abnormalities in children.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1765076124/pediatric_fbgmrn.jpg",
    category: "Pediatric Care"
  },
  {
    title: "Geriatric Physiotherapy",
    desc: "Safe treatment for elderly patients to improve balance, manage arthritis, reduce pain, enhance endurance, prevent falls and maintain independence.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905899/Geriatric_Physiotherapy_wzibv5.webp",
    category: "Geriatric Care"
  },
  {
    title: "Women’s Health Physiotherapy",
    desc: "Pelvic floor therapy, prenatal & postnatal care, diastasis recti rehab, back & pelvic pain management, and recovery after C-section or normal delivery.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905903/Women_s_Health_Physiotherapy_jtxtzj.webp",
    category: "Women’s Health"
  },
  {
    title: "Pilates (Mat, Ladder Barrel & Reformer)",
    desc: "Clinical pilates for strength, posture, flexibility and injury prevention. Includes Reformer training, Ladder Barrel techniques and VR-based posture analysis.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905901/Pilates_Mat_Ladder_Barrel_Reformer_czg7dg.jpg",
    category: "Fitness & Conditioning"
  },
  {
    title: "Post-Surgical Rehabilitation",
    desc: "Comprehensive rehab after ACL surgery, joint replacement, spine surgery, fractures and soft tissue repairs. Includes mobility, strength, gait and functional training.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905901/Post-Surgical_Rehabilitation_re2rca.jpg",
    category: "Post-Operative Care"
  },
  {
    title: "Injury & Pain Management",
    desc: "Advanced pain relief and rehab for acute or chronic injuries. Tailored programs combining manual therapy, exercise science and electrotherapy.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905900/Injury_Pain_Management_wcwcjl.jpg",
    category: "Pain & Injury Care"
  },
  {
    title: "Dry Needling Therapy",
    desc: "Trigger point therapy for muscle tightness, knots, spasms and chronic pain. Provides instant relief and improved mobility.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905899/Dry_Needling_Therapy_xxkmhj.jpg",
    category: "Pain Modulation"
  },
  {
    title: "Manual Therapy",
    desc: "Hands-on techniques including mobilization, manipulation, myofascial release and soft-tissue therapy for stiffness, pain and restricted movement.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905901/Manual_Therapy_ehvmfw.jpg",
    category: "Advanced Manual Techniques"
  },
  {
    title: "Therapeutic Exercise",
    desc: "Structured strengthening, mobility, balance and conditioning exercises based on evidence-backed protocols tailored to individual needs.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1763905902/Therapeutic_Exercise_bxeect.jpg",
    category: "Exercise Therapy"
  },
  {
    title: "Electrotherapy & Modalities",
    desc: "TENS, IFT, Ultrasound, EMS, cryotherapy, heat therapy and more to reduce pain, inflammation and muscle spasm.",
    image: "https://res.cloudinary.com/dwse1tffo/image/upload/v1765076124/electro_pcpeir.jpg",
    category: "Electrotherapy"
  }
];

export default function TreatmentsPage() {
  return (
    <div className="py-8 space-y-14">

      {/* HERO */}
      <header className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <div className="relative h-48 md:h-60">
          <Image
  src="https://res.cloudinary.com/dwse1tffo/image/upload/v1763917578/Physiotherapy-When-Why-and-How-explained_huhoqw.png"
  alt="Treatments"
  fill
  className="object-cover"
/>

        </div>
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold">Explore Our Treatments</h1>
          <p className="text-gray-700 max-w-3xl mt-2">
            We offer comprehensive physiotherapy solutions designed to restore strength, mobility,
            balance and confidence — tailored personally for every patient.
          </p>
        </div>
      </header>

      {/* GRID OF TREATMENTS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Clinical Treatments We Offer</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((t) => (
            <div
              key={t.title}
              className="rounded-2xl border border-gray-100 bg-white shadow-sm overflow-hidden hover:shadow-md transition"
            >
              <div className="relative h-44">
                {/* UPDATED: Added object-[50%_55%] to shift image content down slightly */}
                <Image src={t.image} alt={t.title} fill className="object-cover object-[50%_40%]" /> 
              </div>

              <div className="p-4">
                <p className="text-xs text-emerald font-medium">{t.category}</p>
                <h3 className="font-semibold text-lg mt-1">{t.title}</h3>
                <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t.desc}</p>

                <div className="mt-3">
                  <Link href="/book-appointment" className="text-emerald font-medium">
                    Book a consult →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VR PILATES */}
      <section className="relative overflow-hidden rounded-2xl border border-gray-100 bg-emerald/10 p-6 md:p-10">
        <div className="grid md:grid-cols-3 gap-6 items-center">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-semibold">Experience VR Pilates</h2>
            <p className="mt-2 text-gray-700">
              Correct posture, enhance mobility and improve core strength with our
              immersive VR-assisted Pilates training — combining classical equipment with
              modern movement science.
            </p>
            <div className="mt-4">
              <Link className="text-emerald font-medium" href="/book-appointment">
                Book a demo session →
              </Link>
            </div>
          </div>

          <div className="relative h-44 md:h-52">
            <Image
              src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1600&auto=format&fit=crop"
              alt="VR Pilates"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-6">
        <Link
          href="/book-appointment"
          className="inline-block bg-emerald text-white px-8 py-3 rounded-xl shadow hover:bg-emerald/90"
        >
          Book Your Assessment Today
        </Link>
      </div>
    </div>
  );
}
