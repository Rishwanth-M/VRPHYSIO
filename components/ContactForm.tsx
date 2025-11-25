"use client";

import { useState } from "react";
import { sendEmail } from "@/app/actions/sendEmail";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { Button } from "./ui/button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const res = await sendEmail(formData);

    if (res.success) {
      setSubmitted(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  if (submitted) {
    return (
      <div className="p-6 rounded-2xl bg-emerald/10 text-emerald font-medium">
        Thank you! We&apos;ll get back to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
  <div className="grid md:grid-cols-2 gap-4">
    <Input name="name" placeholder="Name" required />
    <Input name="email" type="email" placeholder="Email" required />
  </div>

  <div className="grid md:grid-cols-2 gap-4">
    <Input name="phone" placeholder="Phone" required />

    <select
      name="location"
      className="w-full rounded-2xl border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald focus:border-emerald"
      required
    >
      <option value="Hyderabad – VR Physio Rehab (Main Branch)">
        Hyderabad – VR Physio Rehab (Main Branch)
      </option>
      <option value="Hyderabad – VR Physio Rehab – Dr. Naveen Reddy Hospital, Erragadda">
        Hyderabad – VR Physio Rehab – Dr. Naveen Reddy Hospital, Erragadda
      </option>
    </select>
  </div>

  <Textarea name="message" placeholder="Your message" />
  <Button type="submit">Send Message</Button>
</form>
  );
}
