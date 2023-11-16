import React from "react";
import HeroSection from "@/components/homepage/layout";
import Section from "@/components/section/Section";
import ProductsPage from "./product/page";
import HomeModal from "@/components/modal/HomeModal";
const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <Section />
      <ProductsPage/>
      {/* <HomeModal/> */}
    </React.Fragment>
  );
};

export default HomePage;
