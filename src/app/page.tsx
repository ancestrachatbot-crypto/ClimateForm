import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Portfolio from "@/components/Portfolio";
import Accomplishments from "@/components/Accomplishments";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <Mission />

      <div className="h-px bg-gradient-to-r from-transparent via-brand-muted/10 to-transparent" />

      <Portfolio />

      <div className="h-px bg-gradient-to-r from-transparent via-brand-muted/10 to-transparent" />

      <Accomplishments />

      <div className="h-px bg-gradient-to-r from-transparent via-brand-muted/10 to-transparent" />

      <About />

      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />

      <Contact />

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-brand-muted/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-brand-muted/50 text-xs">
          <span>© 2025 Tejhyuani Charles · Oceanic</span>
          <span>Built from St. Kitts & Nevis, for the Caribbean</span>
        </div>
      </footer>
    </main>
  );
}
