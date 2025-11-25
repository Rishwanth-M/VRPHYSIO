import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import { Inter, Poppins } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} | ${site.tagline}`,
  description: "South India’s trusted physiotherapy & rehabilitation clinics. Ortho, Neuro, Sports, Women’s Health and more.",
  openGraph: {
    title: `${site.name} | ${site.tagline}`,
    description: "Comprehensive physiotherapy and rehab with advanced tech including VR Pilates.",
    url: site.url,
    siteName: site.name,
    images: [site.ogImage],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ${site.tagline}`,
    description: "Comprehensive physiotherapy and rehab with advanced tech including VR Pilates."
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>
        <Nav />
        <main className="container-responsive">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
