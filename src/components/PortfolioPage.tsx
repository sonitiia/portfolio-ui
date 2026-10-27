import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export function PortfolioPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-page text-body">
      <div
        className="pointer-events-none fixed inset-0 -z-10 bg-hero-glow"
        aria-hidden
      />

      <Header />

      <main className="mx-auto max-w-5xl px-5 pb-24 sm:px-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
