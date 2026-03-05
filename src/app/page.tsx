import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
// import Prices from "@/components/Prices";
import Portfolio from "@/components/Portfolio";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Reviews from "@/components/Reviews";
import Circle from "@/components/Circle";
// import FloatingButton from "@/components/FloatingButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      {/* <Prices /> */}
      <Portfolio />
      <Contacts />
      <Reviews />
      <Circle />
      <Footer />
      {/* <FloatingButton /> */}
    </>
  );
}
