"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import MapEmbed from "@/components/MapEmbed";
import { sendAppointment } from "@/app/actions/sendAppointment";

export default function BookAppointmentPage() {
  const [done, setDone] = useState(false);

const submit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const res = await sendAppointment(formData);

  if (res.success) {
    setDone(true);
  } else {
    alert("Something went wrong. Please try again.");
  }
};


  return (
    <div className="py-8 grid md:grid-cols-2 gap-8">
      <div>
        <h1 className="text-3xl font-bold mb-3">Book Appointment</h1>
        {!done ? (
          <form onSubmit={submit} className="space-y-4">
  <Input name="name" placeholder="Name" required />
  <Input name="email" type="email" placeholder="Email" required />
  <Input name="phone" placeholder="Phone" required />

  <Select name="location" defaultValue="Hyderabad">
    <option>Hyderabad – VR Physio Rehab (Main Branch)</option>
    <option>Hyderabad – VR Physio Rehab – Dr. Naveen Reddy Hospital, Erragadda</option>
  </Select>

  <Input name="service" placeholder="Service (e.g., Ortho, Neuro, Home Visit)" />

  <div className="grid grid-cols-2 gap-3">
    <Input name="date" type="date" required />
    <Input name="time" type="time" required />
  </div>

  <Textarea name="message" placeholder="Message" />

  <Button type="submit" size="lg">Submit</Button>
</form>

        ) : (
          <div className="p-6 rounded-2xl bg-emerald/10 text-emerald font-medium">Thank you! Our team will confirm your appointment shortly.</div>
        )}
      </div>
      <div className="space-y-4">
        <div className="rounded-2xl border border-gray-100 p-4">
          <h2 className="text-xl font-semibold">Contact & Locations</h2>
          <p className="text-gray-700 mt-2">Email: vrphysiorehab@gmail.com<br/>Phone: +91 77949 21287</p>
        </div>
        <MapEmbed query="VR Physio & Rehab Femcity, Aditya Ellen Plaza, Shaikpet Rd, Opp. D-Mart, Hyderabad, Telangana 500096" />
      </div>
    </div>
  );
}
