import React from "react";
import HeroSection from "@/components/homepage/layout";
import Section from "@/components/section/Section";
import ProductCards from "@/components/card/ProductCards";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Section />
      <ProductCards />
    </React.Fragment>
  );
};

export default HomePage;
