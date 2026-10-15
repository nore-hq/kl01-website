import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kl01carspa.in"),
  title: "KL-01 CAR SPA // Best Car Spa, Car Wash & Garage in Manacaud & Muttathara Trivandrum",
  description:
    "KL-01 Car Spa & Detailers: The #1 rated car spa, car wash, detailing shop & auto repair garage in Manacaud, Muttathara & Kallumoodu, Trivandrum. Expert ceramic coating, self-healing PPF, 3-stage machine polish, snow foam wash & mechanical service.",
  keywords: [
    "best car spa in manacaud",
    "best car spa in muttathara",
    "best garage in manacaud",
    "best garage in muttathara",
    "best car wash in manacaud",
    "best car wash in muttathara",
    "best car service centre in manacaud",
    "best car service centre in muttathara",
    "car detailing shop in manacaud",
    "car detailing studio muttathara",
    "car wash near kallumoodu",
    "auto repair workshop manacaud",
    "car garage manakkad trivandrum",
    "car denting painting muttathara",
    "ceramic coating manacaud muttathara",
    "paint protection film ppf trivandrum",
    "underbody coating trivandrum",
    "kl01 car spa",
    "kl01carspa.in",
    "kl zero one car spa detailerz",
    "car polishing trivandrum",
    "car mechanical service kallumoodu",
  ],
  authors: [{ name: "KL-01 Car Spa & Detailers", url: "https://kl01carspa.in" }],
  creator: "KL-01 Car Spa & Detailers",
  publisher: "KL-01 Car Spa & Detailers",
  alternates: {
    canonical: "https://kl01carspa.in/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "KL-01 CAR SPA // Best Car Spa, Car Wash & Garage in Manacaud & Muttathara",
    description:
      "Premier car spa, car wash, detailing studio & auto repair garage in Kallumoodu, Muttathara & Manacaud, Trivandrum. Mirror polish, ceramic coating, PPF & mechanical care.",
    url: "https://kl01carspa.in/",
    siteName: "KL-01 Car Spa & Detailers",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 400,
        alt: "KL-01 Car Spa & Detailers - Manacaud & Muttathara Trivandrum",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KL-01 CAR SPA // Best Car Spa, Car Wash & Garage in Manacaud & Muttathara",
    description:
      "Premier car spa, car wash, detailing studio & auto repair garage in Kallumoodu, Muttathara & Manacaud, Trivandrum.",
    images: ["/assets/logo.png"],
  },
  category: "Automotive",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#060709",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/logo.png" />
        <link rel="canonical" href="https://kl01carspa.in/" />

        {/* Geographic & Local SEO Meta Tags */}
        <meta name="geo.region" content="IN-KL" />
        <meta name="geo.placename" content="Muttathara, Manacaud, Thiruvananthapuram, Kerala, India" />
        <meta name="geo.position" content="8.46965;76.93607" />
        <meta name="ICBM" content="8.46965, 76.93607" />

        {/* Search Intent & Business Classification */}
        <meta name="classification" content="Automotive Car Spa, Car Wash, Detailing Studio, Garage & Auto Repair Workshop" />
        <meta name="target" content="Manacaud, Muttathara, Kallumoodu, Kamaleswaram, Thiruvananthapuram, Kerala" />
        <meta name="coverage" content="Thiruvananthapuram, Kerala, India" />
      </head>
      <body>{children}</body>
    </html>
  );
}
