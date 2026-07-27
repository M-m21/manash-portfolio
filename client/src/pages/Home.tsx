import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import AILab from "@/components/AILab";
import CyberLab from "@/components/CyberLab";
import TechStack from "@/components/TechStack";
import LearningDashboard from "@/components/LearningDashboard";
import Blog from "@/components/Blog";
import Journey from "@/components/Journey";
import Booking from "@/components/Booking";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Experience />
        <Projects />
        <Research />
        <AILab />
        <CyberLab />
        <TechStack />
        <LearningDashboard />
        <Blog />
        <Booking />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
