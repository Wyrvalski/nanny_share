import React from "react";
import Hero from "../components/Hero";
import Header from "../components/Header";
import AvailableNanny from "../components/AvailableNanny";
import ShareNanny from "../components/ShareNanny";
import { Line, Main } from "./styles";
import NewNanny from "../components/NewNanny";
import SharePayments from "../components/SharePayments";
import History from "../components/History";
import DailyDiary from "../components/DailyDiary";
import Footer from "../components/Footer";

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
        <Line />
        <SharePayments />
        <Line />
        <History />
        <Line />
        <DailyDiary />
      </Main>
      <Footer />
    </>
  );
};

export default LandingPage;
