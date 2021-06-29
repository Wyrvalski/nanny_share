import React from "react";
import Article from "../../common/components/Article";
import SubTitle from "../../common/components/SubTitle";
import Paragraph from "../../common/components/Paragraph";
import LinkParagraph from "../../common/components/LinkParagraph";
import { BillingHistory } from "../../logos";
import { ImageContainer } from "./styles";

const History = () => {
  return (
    <Article isCenter>
      <SubTitle title={"A framework built for the long term"} />
      <Paragraph widthSize={"70%"} align={"center"}>
        Childcare is for the long term. And you need a framework you can count
        on that gives your share long term viability and success. That’s why
        we’ve defined Hapu around our three tribal principles; clearly defined
        process, transparency over money and equality of participation.
      </Paragraph>
      <LinkParagraph
        title={"Read how Hapu’s tribal background defines our app "}
      />
      <ImageContainer>
        <img src={BillingHistory} />
      </ImageContainer>
    </Article>
  );
};

export default History;
