import Navbar from "@/app/components/Navbar";
import SideNav from "@/app/components/SideNav";
import Hero from "@/app/components/Hero";
import Premise from "@/app/components/Premise";
import BTSGallery from "@/app/components/BTSGallery";
import Cast from "@/app/components/Cast";
import Team from "@/app/components/Team";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main className="w-full bg-black text-pale-cream overflow-x-hidden">
      <Navbar />
      <SideNav />
      <Hero />
      <Premise />
      <BTSGallery />
      <Cast />
      <Team />
      <Footer />
    </main>
  );
}
