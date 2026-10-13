import Navbar from "@/components/Navbar";
import PolishShowcaseSection from "@/components/PolishShowcaseSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import StudioSection from "@/components/StudioSection";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Machine Car Polish // KL-01 Car Spa Trivandrum",
  description:
    "Professional machine car polishing, swirl mark removal, and deep showroom gloss restoration at KL-01 Car Spa in Kallumoodu, Trivandrum.",
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
