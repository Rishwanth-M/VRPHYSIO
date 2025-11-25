export default function MapEmbed({ query }: { query: string }) {
  const src = `https://www.google.com/maps?q=${encodeURIComponent(query)}&output=embed`;
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-soft">
      <iframe src={src} width="100%" height="250" loading="lazy"></iframe>
    </div>
  );
}
