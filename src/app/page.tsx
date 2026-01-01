import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Preloader from "@/components/Preloader";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Hackathon from "@/components/Hackathon";
import Leadership from "@/components/Leadership";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Hackathon />
      <Leadership />
      <BlogSection />
      <Contact />
      <Footer />
    </main>
  );
}
