import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Our Services – Comprehensive Physiotherapy & Rehabilitation Solutions",
  description:
    "Explore Home Care Physiotherapy, Advanced Rehab Centers, VR Rehabilitation, Laser Therapy, Gait Training, Hydrotherapy, Electrotherapy, Pilates and more."
};

export default function ServicesPage() {
  return (
    <div className="py-8 space-y-14">

      {/* HEADER IMAGE */}
      <header className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
        <div className="relative h-48 md:h-64">
          <Image
            src="https://res.cloudinary.com/dwse1tffo/image/upload/v1763917032/rehabilitation-physiotherapy-services-kakinada_dmc6tw.png"
            alt="Services"
            fill
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h1 className="text-3xl md:text-4xl font-bold">
            Comprehensive Physiotherapy & Rehabilitation Services
          </h1>
          <p className="text-gray-600 mt-2 text-lg">
            Advanced clinical care, delivered at our centers and at your home.
          </p>
        </div>
      </header>

      {/* HOME CARE SECTION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Home Care Physiotherapy</h2>
        <p className="text-gray-700 max-w-3xl leading-relaxed">
          Our professional home physiotherapy services bring high-quality rehab directly to your
          doorstep — across Telangana, Andhra Pradesh, Bangalore, Kerala & Tamil Nadu.
          Ideal for seniors, post-surgical recovery, patients with mobility limitations,
          and those preferring private, personalised care.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* 1. Ortho Home Care */}
          <Card>
            <CardHeader>
              <CardTitle>Ortho Home Care</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Strengthening, mobility restoration, post-fracture rehab, back & neck pain relief,
              arthritis management, and joint stiffness recovery — all done safely at home.
            </CardContent>
          </Card>

          {/* 2. Post-Op Care */}
          <Card>
            <CardHeader>
              <CardTitle>Post-Op Care</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Guided rehabilitation after ACL reconstruction, knee replacement, spine surgery,
              shoulder repairs and fractures. Includes pain control, mobility, strength and gait training.
            </CardContent>
          </Card>

          {/* 3. Geriatric Home Physio */}
          <Card>
            <CardHeader>
              <CardTitle>Geriatric Home Physio</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Gentle and safe exercises for seniors to improve balance, prevent falls, reduce joint pain,
              increase mobility and maintain independence in daily activities.
            </CardContent>
          </Card>

          {/* 4. Neuro Rehab */}
          <Card>
            <CardHeader>
              <CardTitle>Neuro Rehab at Home</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Stroke, Parkinson’s, spinal cord injury and neuropathy rehabilitation using neuromuscular
              re-education, balance training, gait training and cognitive-motor retraining at home.
            </CardContent>
          </Card>

          {/* 5. Telephysiotherapy */}
          <Card>
            <CardHeader>
              <CardTitle>Telephysiotherapy (Online)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Convenient online consultation and therapy sessions for patients who cannot visit the clinic. Includes assessment, customized exercise prescription, and real-time guidance via secure video calls.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CENTER SERVICES SECTION */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Physio Rehab Center Services</h2>
        <p className="text-gray-700 max-w-3xl leading-relaxed">
          Our flagship centers offer advanced rehabilitation environments equipped with 
          clinical-grade machinery, VR systems, Pilates equipment, electrotherapy units, and 
          personalised treatment rooms for privacy and comfort.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          {/* 2. Laser Therapy */}
          <Card>
            <CardHeader>
              <CardTitle>Laser Therapy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              A non-invasive pain-relief and tissue-healing technique used for tendinitis,
              muscle injuries, joint inflammation, post-surgical scars and chronic pain.
            </CardContent>
          </Card>

          {/* 3. Treadmill Gait Training */}
          <Card>
            <CardHeader>
              <CardTitle>Treadmill Gait Training</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Correct posture, improve walking mechanics and build endurance using
              biomechanically guided treadmill protocols.
            </CardContent>
          </Card>

          {/* 5. Electrotherapy */}
          <Card>
            <CardHeader>
              <CardTitle>Electrotherapy</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Modalities such as TENS, IFT, Ultrasound and Muscle Stimulators for pain relief,
              swelling reduction and muscle activation during early rehab.
            </CardContent>
          </Card>

          {/* 6. Pilates Studio */}
          <Card>
            <CardHeader>
              <CardTitle>Pilates Studio</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Reformer, Ladder Barrel and Mat Pilates for posture correction, core strength,
              mobility, balance and injury prevention. Designed for beginners to athletes.
            </CardContent>
          </Card>

          {/* 5. Telephysiotherapy */}
          <Card>
            <CardHeader>
              <CardTitle>Telephysiotherapy (Online)</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Convenient online consultation and therapy sessions for patients who cannot visit the clinic. Includes assessment, customized exercise prescription, and real-time guidance via secure video calls.
            </CardContent>
          </Card>

          {/* 6. Strength Training */}
          <Card>
            <CardHeader>
              <CardTitle>Strength Training & Conditioning</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Personalized programs using weights, resistance bands, and bodyweight exercises to build muscle mass, increase bone density, and enhance overall physical power and endurance.
            </CardContent>
          </Card>

{/* 7. Functional Training */}
          <Card>
            <CardHeader>
              <CardTitle>Functional Training</CardTitle>
            </CardHeader>
            <CardContent className="text-gray-700">
              Exercises designed to improve daily life movements, focusing on core stability, balance, and coordination. Ideal for returning to sport, work, or simple daily activities with confidence.
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <div className="flex justify-center pt-4">
        <Link href="/book-appointment">
          <Button size="lg" className="px-8 text-base">
            Book Your Assessment Today
          </Button>
        </Link>
      </div>
    </div>
  );
}
