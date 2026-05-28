import { LocaleProvider } from "@/presentation/context/LocaleContext";
import { MainLayout } from "@/presentation/components/layouts/MainLayout";
import { HeroSection } from "@/presentation/components/organisms/HeroSection";
import { ProjectsSection } from "@/presentation/components/organisms/ProjectsSection";
import { SkillsSection } from "@/presentation/components/organisms/SkillsSection";
import { AboutSection } from "@/presentation/components/organisms/AboutSection";
import { ContactSection } from "@/presentation/components/organisms/ContactSection";

export default function PortfolioPage() {
  return (
    <LocaleProvider>
      <MainLayout>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </MainLayout>
    </LocaleProvider>
  );
}
