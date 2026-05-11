import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const siteUrl = "https://lunathaimassage.co.nz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Luna Thai Massage & Wellness | Christchurch, NZ",
    template: "%s | Luna Thai Massage & Wellness",
  },
  description:
    "Professional Thai massage in Christchurch, NZ. Traditional Thai, deep tissue, hot stone, aromatherapy & more. Open 7 days, 9 AM–8:30 PM. Book online.",
  keywords: [
    "Thai massage Christchurch",
    "massage Christchurch",
    "deep tissue massage Christchurch",
    "hot stone massage Christchurch",
    "aromatherapy massage Christchurch",
    "Riccarton massage",
    "professional massage NZ",
    "therapeutic massage Christchurch",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Luna Thai Massage & Wellness",
    title: "Luna Thai Massage & Wellness | Christchurch, NZ",
    description:
      "Professional Thai massage in Christchurch. Traditional Thai, deep tissue, hot stone & more. Open 7 days.",
    images: [{ url: "/og.JPG", width: 1200, height: 630, alt: "Luna Thai Massage & Wellness" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luna Thai Massage & Wellness | Christchurch, NZ",
    description:
      "Professional Thai massage in Christchurch. Traditional Thai, deep tissue, hot stone & more. Open 7 days.",
    images: ["/og.JPG"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${lato.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-lato">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster richColors position="top-center" />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MassageTherapist",
              name: "Luna Thai Massage & Wellness",
              image: `${siteUrl}/og.JPG`,
              url: siteUrl,
              telephone: "+64-22-852-4696",
              email: "lunathaimassageandwellness@gmail.com",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "14/14 Acheron Drive",
                addressLocality: "Riccarton, Christchurch",
                postalCode: "8011",
                addressCountry: "NZ",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -43.539049,
                longitude: 172.586787,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  opens: "09:00",
                  closes: "20:30",
                },
              ],
              sameAs: [
                "https://www.facebook.com/profile.php?id=61556598226926",
                "https://www.instagram.com/lunathai_massage",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
