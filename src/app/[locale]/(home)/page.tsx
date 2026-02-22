import React from "react";
import StarField from "./_components/StarField";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import AboutSection from "./_components/AboutSection";
import IntegrationSection from "./_components/IntegrationSection";
import ContactSection from "./_components/ContactSection";
import CTASection from "./_components/CTASection"; 
import ShootingStarsWrapper from "./_components/ShootingStarsWrapper";
import BackToTop from "./_components/BackToTop";

const Page = async () => {
  return (
    <div className="relative min-h-screen">
      <ShootingStarsWrapper />
      <StarField />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <IntegrationSection /> 
      <ContactSection />
      <CTASection />
      <BackToTop />
    </div>
  );
};

export default Page;
