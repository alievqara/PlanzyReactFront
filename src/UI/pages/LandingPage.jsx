// src/UI/pages/LandingPage.jsx


import React from "react";
import MainLayout from "../layout/MainLayout";
import FeaturesSection from "../components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactForm from "../components/ContactForm";

const LandingPage = () => {
  return (
    <MainLayout>
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactForm />
    </MainLayout>
  );
};

export default LandingPage;
