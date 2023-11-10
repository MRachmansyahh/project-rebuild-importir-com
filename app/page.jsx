import React from "react";
import HeroSection from "@/components/homepage/layout";
import Section from "@/components/section/Section";
import ChrismastPage from "./product/christmas/page";
import ProductUnderSeratus from "./product/under-seratus/page";
const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Section />
      <ChrismastPage/>
      <ProductUnderSeratus/>
    </React.Fragment>
  );
};

export default HomePage;
