import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import AvailableNanny from "../components/AvailableNanny";
import ShareNanny from "../components/ShareNanny";
import { Line, Main } from "./styles";
import NewNanny from "../components/NewNanny";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AvailableNanny />
      <Main>
        <ShareNanny />
        <Line />
        <NewNanny />
      </Main>
    </>
  );
};

export default LandingPage;
