import React from "react";
import HeroSection from "../components/About/Homepage";
import History from "../components/About/History";
import GoverningBody from "../components/About/Pastandcurrentpresidents";
import SubCommittees from "../components/About/SubCommittee";

const AboutUs = () => {
  return (
    <div>
      <HeroSection />
      <History />
      <GoverningBody />
      <SubCommittees />
    </div>
  );
};

export default AboutUs;
