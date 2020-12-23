import React from "react";
import Showcase from "../components/Showcase";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Properties from "../components/Properties";
import ContactUs from "../components/ContactUs";

const Home = () => {
  return (
    <>
      <Showcase />
      <About />
      <WhyChooseUs />
      <Services />
      <Properties />
      <ContactUs />
    </>
  );
};

export default Home;
