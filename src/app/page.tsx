import UtilityBar from "@/components/UtilityBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Network from "@/components/Network";
import Track from "@/components/Track";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <UtilityBar />
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Network />
        <Track />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
