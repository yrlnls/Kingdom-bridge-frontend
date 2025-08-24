import Hero from "@/components/Hero";
import PrayerWall from "@/components/PrayerWall";
import DevotionalSection from "@/components/DevotionalSection";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <DevotionalSection />
      <PrayerWall />
      <Footer />
    </div>
  );
};

export default Index;
