import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kl01carspa.com"),
  title: "KL-01 CAR SPA // Car Detailing & Studio Trivandrum",
  description:
    "KL-01 Car Spa & Detailers, Trivandrum. Professional car detailing, paint protection film (PPF), ceramic coatings, machine polish, and mechanical care in Kallumoodu, Thiruvananthapuram.",
  keywords: [
    "KL01 Car Spa",
    "Car Detailing Trivandrum",
    "Ceramic Coating Trivandrum",
    "PPF Thiruvananthapuram",
    "Car Polishing Trivandrum",
    "Car Spa Kallumoodu",
  ],
  authors: [{ name: "KL-01 Car Spa & Detailers" }],
  openGraph: {
    title: "KL-01 CAR SPA // Car Detailing & Studio Trivandrum",
    description: "Professional car detailing, PPF, ceramic coatings, and machine polish in Thiruvananthapuram.",
    url: "https://kl01carspa.com",
    siteName: "KL01 Car Spa",
    images: [
      {
        url: "/assets/logo.png",
        width: 800,
        height: 400,
        alt: "KL01 Car Spa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KL-01 CAR SPA // Car Detailing & Studio Trivandrum",
    description: "Professional car detailing, PPF, ceramic coatings, and machine polish in Thiruvananthapuram.",
    images: ["/assets/logo.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
      </head>
      <body>{children}</body>
    </html>
  );
}
