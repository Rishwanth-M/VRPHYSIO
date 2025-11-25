export function BrandLogo({ size = 60 }: { size?: number }) {
  return (
    <div className="flex items-center gap-2">
      <div
        aria-hidden
        className="rounded-xl"
        style={{
          width: size,
          height: size,
          backgroundImage:
            "url('https://res.cloudinary.com/dwse1tffo/image/upload/v1763904777/ChatGPT_Image_Oct_30__2025__11_25_34_AM-removebg-preview_x16wbn.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="flex flex-col leading-tight">
        <span className="font-bold text-charcoal">VR Physio Rehab</span>
        <span className="text-xs text-gray-500 -mt-1">
          Move Better. Heal Smarter.
        </span>
      </div>
    </div>
  );
}
