import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Circle from "@/components/Circle";
import Manager from "@/components/Manager";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contacts />
      <Reviews />
      <Circle />
      <Manager />
    </>
  );
}
