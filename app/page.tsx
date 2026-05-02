import Navbar from "@/app/components/Navbar";
import Home from "@/app/components/Home";
import About from "@/app/components/About";
import Portfolio from "@/app/components/Portfolio";
import Services from "@/app/components/Services";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import BackToTop from "@/app/components/BackToTop";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
