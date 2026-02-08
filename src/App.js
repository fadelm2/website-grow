import React, { useEffect } from "react";
import "./App.css";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { RequirementsSection } from "./components/RequirementsSection";
import { MemberShowcase } from "./components/MemberShowcase";
import { AchievementSection } from "./components/AchievementSection";
import { MediaLinksSection } from "./components/MediaLinksSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import {
  guildInfo,
  guildFeatures,
  joinRequirements,
  coreMembers,
  achievements
} from "./data/mockData";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_chase-grow/artifacts/b9k3gptb_f4ff6dae-3c37-4fc2-aca1-7d03736a1af0.png";

function App() {
  useEffect(() => {
    // Smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });

    // Fade-in on scroll animation
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-fade-in-up').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <HeroSection guildInfo={guildInfo} logoUrl={LOGO_URL} />
      <AboutSection guildInfo={guildInfo} />
      <FeaturesSection features={guildFeatures} />
      <RequirementsSection requirements={joinRequirements} />
      <MemberShowcase members={coreMembers} />
      <AchievementSection achievements={achievements} />
      <MediaLinksSection guildInfo={guildInfo} />
      <CTASection guildInfo={guildInfo} />
      <Footer guildInfo={guildInfo} />
    </div>
  );
}

export default App;
