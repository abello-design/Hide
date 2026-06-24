import Navbar from "@/app/components/Navbar";
import SideNav from "@/app/components/SideNav";
import Hero from "@/app/components/Hero";
import Premise from "@/app/components/Premise";
import Characters from "@/app/components/Characters";
import BTSGallery from "@/app/components/BTSGallery";
import MoodboardStrip from "@/app/components/MoodboardStrip";
import Team from "@/app/components/Team";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-black text-pale-cream overflow-x-hidden">
      <Navbar />
      <SideNav />
      <Hero />
      <Premise />
      <Characters />
      <BTSGallery />
      <MoodboardStrip />
      <Team />
      <Footer />
    </main>
  );
}
