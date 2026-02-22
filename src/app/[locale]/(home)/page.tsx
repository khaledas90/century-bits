import React from "react";
import StarField from "./_components/StarField";
import HeroSection from "./_components/HeroSection";
import FeaturesSection from "./_components/FeaturesSection";
import IntegrationSection from "./_components/IntegrationSection";
import PricingSection from "./_components/PricingSection";
import ContactSection from "./_components/ContactSection";
import CTASection from "./_components/CTASection";

const Page = async () => {
  return (
    <div className="relative">
      <StarField />
      <HeroSection />
      <FeaturesSection />
      <IntegrationSection />
      <PricingSection />
      <ContactSection />
      <CTASection />
    </div>
  );
};

export default Page;
