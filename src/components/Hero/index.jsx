import React from "react";
import {
  ContentHero,
  HeroContainer,
  LeftContent,
  LinkButtonContainer,
  PlayButton,
  RightContent,
} from "./styles";
import { manageImage, playButton } from "../../logos";
import LinkParagraph from "../../common/components/LinkParagraph";

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <ContentHero>
          <LeftContent>
            <h1>Easily create or join a local nanny share with Hapu</h1>
            <h3>
              Hapu is Airbnb for nanny share. Share your home, nanny and costs
              and create new flexible, affordable solutions in childcare.
            </h3>
            <LinkButtonContainer>
              <PlayButton src={playButton} />
              <LinkParagraph
                colorLink={"white"}
                title={"See hapu in action (27 seconds)"}
                marginLink={"0 0 0 20px"}
              ></LinkParagraph>
            </LinkButtonContainer>
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
