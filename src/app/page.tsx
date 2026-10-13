import Navbar from "@/components/Navbar";
import CinematicHero from "@/components/CinematicHero";
import PolishShowcaseSection from "@/components/PolishShowcaseSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import StudioSection from "@/components/StudioSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-primary)", color: "#FFFFFF" }}>
      {/* Floating Glass Navbar */}
      <Navbar />

      {/* 1st Fold: Royal Cinematic Hero with Main Video Background */}
      <CinematicHero />

      {/* 2nd Fold: The Art of Mirror Polish with Second Real-Atelier Video */}
      <PolishShowcaseSection />

      {/* 3rd Fold: 15 Curated Signature Services */}
      <TreatmentsSection />

      {/* 4th Fold: Studio Location & Google Maps Integration */}
      <StudioSection />

      {/* Luxury Minimalist Footer */}
      <Footer />

      {/* Sticky Quick-Action Bar for Mobile Devices */}
      <MobileBottomBar />
    </main>
  );
}
