export const metadata = { title: "Patient Rights & Responsibilities – VR Physio Rehab" };

export default function PatientRightsPage() {
  return (
    <div className="py-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Patient Rights & Responsibilities</h1>
      <p className="text-gray-700">
        At VR Physio Rehab, we believe in transparent, ethical, and respectful
        patient-care relationships. This page outlines your rights and your
        responsibilities as a patient receiving treatment from our clinic.
      </p>

      <h2 className="text-xl font-semibold mt-6">Your Rights</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Right to safe, ethical, and evidence-based physiotherapy care.</li>
        <li>Right to be treated with dignity, respect, and compassion.</li>
        <li>Right to complete privacy and confidentiality of medical information.</li>
        <li>Right to clear explanation of your diagnosis and treatment plan.</li>
        <li>Right to ask questions and seek clarification from your therapist.</li>
        <li>Right to consent, refuse, or discontinue treatment at any time.</li>
        <li>Right to know the qualifications of your physiotherapist.</li>
        <li>Right to receive receipts, medical notes, or reports upon request.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Your Responsibilities</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-2">
        <li>Provide accurate medical history and previous treatment details.</li>
        <li>Follow the prescribed exercise and treatment plan consistently.</li>
        <li>Inform your therapist about changes in symptoms or medication.</li>
        <li>Be respectful and cooperative during sessions.</li>
        <li>Arrive on time for appointments.</li>
        <li>Make payments as per the clinic policy.</li>
        <li>Use equipment safely and follow staff instructions.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">Clinical Commitment</h2>
      <p className="text-gray-700">
        We are committed to offering the highest standards of physiotherapy and
        rehabilitation care. We continuously update our protocols based on
        global evidence, NABH-aligned systems, and patient safety guidelines.
      </p>

      <h2 className="text-xl font-semibold mt-6">Contact</h2>
      <p className="text-gray-700">
        For queries about patient rights or care quality, write to  
        <strong> support@vrphysiorehab.com</strong>
      </p>
    </div>
  );
}
