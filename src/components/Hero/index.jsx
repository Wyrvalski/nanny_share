import React from "react";
import Header from "../Header";
import {
  ContentHero,
  HeroContainer,
  LeftContent,
  RightContent,
} from "./styles";
import { manageImage } from "../../logos";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <Header />
        <ContentHero>
          <LeftContent>
            <h1>Easily create or join a local nanny share with Hapu</h1>
            <h3>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </h3>
          </LeftContent>
          <RightContent>
            <img src={manageImage} />
          </RightContent>
        </ContentHero>
      </HeroContainer>
    </>
  );
};

export default Hero;
