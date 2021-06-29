import React from "react";
import {
  ContentHero,
  HeroContainer,
  LeftContent,
  LinkButtonContainer,
  PlayButton,
  RightContent,
} from "./styles";
import { manageImage, playButton } from "../../images";
import LinkParagraph from "../../common/components/LinkParagraph";
import {
  Experiment,
  Variant,
  emitter,
  experimentDebugger,
} from "@marvelapp/react-ab-test";
import Mixpanel from "mixpanel";

experimentDebugger.enable();
emitter.defineVariants("heroTest", ["firstVariant", "secondVariant"], [50, 50]);
const mixpanel = Mixpanel.init("3347df7d0af98a91e2641ec006b95e7c");

const Hero = () => {
  return (
    <>
      <HeroContainer>
        <ContentHero>
          <LeftContent>
            <Experiment name={"heroTest"}>
              <Variant name={"firstVariant"}>
                <h1>Easily create or join a local nanny share with Hapu</h1>
                <h3>
                  Hapu is Airbnb for nanny share. Share your home, nanny and
                  costs and create new flexible, affordable solutions in
                  childcare.
                </h3>
              </Variant>
              <Variant name={"secondVariant"}>
                <h1>Create the childcare you need at a price you can afford</h1>
                <h3>
                  Connect with other local families to share a nanny from as low
                  as $10.00/hr each. Create your family profile today to get
                  started.
                </h3>
              </Variant>
            </Experiment>

            <LinkButtonContainer>
              <PlayButton src={playButton} />
              <LinkParagraph
                colorLink={"white"}
                title={"See hapu in action (27 seconds)"}
                marginLink={"0 0 0 20px"}
              />
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

emitter.addPlayListener(function (experimentName, variantName) {
  console.log(`Displaying experiment ${experimentName} variant ${variantName}`);
});

emitter.addWinListener(function (experimentName, variantName) {
  console.log(
    `Variant ${variantName} of experiment ${experimentName} was clicked`
  );
  mixpanel.track(experimentName + " " + variantName, {
    name: experimentName,
    variant: variantName,
  });
});
