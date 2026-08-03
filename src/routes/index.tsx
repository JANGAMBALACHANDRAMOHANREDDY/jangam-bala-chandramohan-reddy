import { createFileRoute } from "@tanstack/react-router";
import AuroraBackground from "@/components/portfolio/AuroraBackground";
import Nav from "@/components/portfolio/Nav";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Internship from "@/components/portfolio/Internship";
import Experience from "@/components/portfolio/Experience";
import Education from "@/components/portfolio/Education";
import Certifications from "@/components/portfolio/Certifications";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

const title = "Jangam Bala Chandra Mohan Reddy — AI & Full Stack Engineer";
const description =
  "Portfolio of Jangam Bala Chandra Mohan Reddy — AI Engineer and Python Full Stack Developer building React, FastAPI and machine learning products.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <AuroraBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Experience />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
