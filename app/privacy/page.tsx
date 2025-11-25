export const metadata = { title: "Privacy Policy – VR Physio Rehab" };

export default function PrivacyPage() {
  return (
    <div className="py-10 max-w-3xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-gray-700">
        At VR Physio Rehab (“we”, “our”, “clinic”), we are committed to protecting the
        privacy, safety, and confidentiality of all patient information. This
        Privacy Policy explains how we collect, use, store, and safeguard your
        personal and health-related data.
      </p>

      <h2 className="text-xl font-semibold mt-6">1. Information We Collect</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Personal details: Name, phone number, email, address</li>
        <li>Medical history and clinical records shared during consultation</li>
        <li>Diagnostic reports, prescriptions, scans or physiotherapy notes</li>
        <li>Booking data, feedback, and communication logs</li>
        <li>Website analytics (device, browser, session behaviour)</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">2. How We Use Your Information</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>To provide physiotherapy and rehabilitation services</li>
        <li>To create personalised treatment plans</li>
        <li>To schedule appointments and manage your clinical journey</li>
        <li>To maintain medical records as per healthcare regulations</li>
        <li>To improve our clinic services and patient care standards</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">3. How We Protect Your Data</h2>
      <p className="text-gray-700">
        We follow strict digital and physical security measures. Only authorized
        clinicians can access your records. We do not sell, rent, or trade your
        data with any third party.
      </p>

      <h2 className="text-xl font-semibold mt-6">4. Sharing of Data</h2>
      <p className="text-gray-700">
        We may share information only when required:
      </p>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>With surgeons or doctors involved in your care (with consent)</li>
        <li>When legally required (court orders, government requests)</li>
        <li>For insurance or billing, only when authorized by you</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">5. Your Rights</h2>
      <ul className="list-disc pl-5 text-gray-700 space-y-1">
        <li>Access your medical records</li>
        <li>Request corrections to inaccurate data</li>
        <li>Withdraw consent for non-essential communication</li>
        <li>Request deletion of non-medically mandatory information</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6">6. Contact Us</h2>
      <p className="text-gray-700">
        For questions about privacy practices, write to us at:  
        <strong>support@vrphysiorehab.com</strong>
      </p>
    </div>
  );
}
