import React from "react";
import HeroSection from "@/components/homepage/layout";
import Section from "@/components/section/Section";
import ChristmasCards from "@/components/card/ChristmasCards";
import ProductUnderSeratus from "@/components/card/UnderSeratus";
const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Section />
      <ChristmasCards />
      <ProductUnderSeratus />
    </React.Fragment>
  );
};

export default HomePage;
