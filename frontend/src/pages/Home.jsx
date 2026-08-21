import React from "react";
import Hero from "../components/home/Hero";
import BrandMarquee from "../components/home/BrandMarquee";
import ServicesSection from "../components/home/ServicesSection";
import Industries from "../components/home/Industries";
import GlobalReach from "../components/home/GlobalReach";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <main>
      <Hero />
      <BrandMarquee />
      <ServicesSection />
      <Industries />
      <GlobalReach />
      <Testimonials />
      <CTASection />
    </main>
  );
};

export default Home;
