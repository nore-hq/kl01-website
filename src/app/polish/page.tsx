import Navbar from "@/components/Navbar";
import PolishShowcaseSection from "@/components/PolishShowcaseSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import StudioSection from "@/components/StudioSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Car Polishing & Paint Correction // KL-01 Car Spa Manacaud & Muttathara",
  description:
    "Professional 3-stage machine car polishing, swirl mark removal, and deep showroom mirror gloss restoration at KL-01 Car Spa in Kallumoodu, Manacaud & Muttathara, Trivandrum.",
  alternates: {
    canonical: "https://kl01carspa.in/polish/",
  },
  keywords: [
    "car polishing manacaud",
    "car polish muttathara",
    "machine polish trivandrum",
    "paint correction manakkad",
    "swirl mark removal kallumoodu",
    "mirror finish polish trivandrum",
    "kl01 car spa polish",
  ],
};

export default function PolishPage() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", color: "#FFFFFF", paddingTop: "80px" }}>
      <Navbar />
      <PolishShowcaseSection />
      <TreatmentsSection />
      <StudioSection />
      <Footer />
      <MobileBottomBar />
    </main>
  );
}
