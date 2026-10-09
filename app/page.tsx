import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import CodeSnippet from "@/components/CodeSnippet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-[#080c14] text-slate-900 dark:text-slate-100 transition-colors duration-300 bg-grid-pattern relative">
      {/* Thin gradient bar that grows as you scroll */}
      <ScrollProgress />
      <Navbar />
      <Hero />
      {/* Animated counters — sits between hero and about */}
      <Stats />
      <About />
      <Skills />
      <Projects />
      {/* Interactive production Java & Spring Boot architecture showcase */}
      <CodeSnippet />
      <Contact />
      <Footer />
    </main>
  );
}
