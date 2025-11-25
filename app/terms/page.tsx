export const metadata = { title: "Terms & Conditions – VR Physio Rehab" };

export default function TermsPage() {
  return (
    <div className="py-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
      <p className="text-gray-700">
        By using our website, booking services, or receiving care at VR Physio Rehab,
        you agree to the following Terms & Conditions. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Medical Disclaimer</h2>
      <p className="text-gray-700">
        Information on this website is for educational purposes only. It does not
        replace professional medical advice. Consult a licensed physiotherapist or doctor
        for diagnosis and treatment.
      </p>

      <h2 className="text-xl font-semibold mt-6">2. Appointment Policy</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Sessions must be booked in advance.</li>
        <li>Late arrivals may result in reduced session time.</li>
        <li>Cancellation within 24 hours may be chargeable.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. Payment & Refunds</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Payments must be completed before or immediately after each session.</li>
        <li>Packages/sessions once purchased are non-refundable.</li>
        <li>Refunds may be considered only for medical reasons (doctor documentation required).</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">4. Physiotherapy Treatment</h2>
      <p className="text-gray-700">
        All treatments follow clinical protocols. Recovery timelines vary based on
        condition, severity, compliance, and individual factors.
      </p>

      <h2 className="text-xl font-semibold mt-6">5. Website Usage</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>You agree not to misuse this website or attempt unauthorized access.</li>
        <li>Content cannot be copied, reproduced, or shared without written permission.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">6. Limitation of Liability</h2>
      <p className="text-gray-700">
        VR Physio Rehab is not liable for indirect, incidental, or consequential
        damages arising from misuse of information or services.
      </p>

      <h2 className="text-xl font-semibold mt-6">7. Contact</h2>
      <p className="text-gray-700">
        For any concerns, email: <strong>support@vrphysiorehab.com</strong>
      </p>
    </div>
  );
}
