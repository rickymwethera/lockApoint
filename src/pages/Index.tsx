import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Locations from "@/components/Locations";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Locations />
        <WhyUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
