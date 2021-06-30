import React from "react";
import SubTitle from "../../common/components/SubTitle";
import { ShareImage } from "../../images";
import LinkParagraph from "../../common/components/LinkParagraph";
import Article from "../../common/components/Article";
import { LeftElements, RightElements } from "./styles";
import Paragraph from "../../common/components/Paragraph";

const ShareNanny = () => {
  return (
    <Article isReverse paddingTop={"80px"}>
      <LeftElements>
        <SubTitle title={`Share your home, nanny and costs`} width={"300px"} />
        <Paragraph align={"left"}>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your
          costs in half be, well, fantastic?! If only it was easy to connect
          with other parents to share your costs? Well now it is, with Hapu.
          <LinkParagraph title={" Hapu means tribe"} /> and it’s our
          foundational 3 tribal principles that empowers you to create and
          manage your own tribe. A tribe that together has the power to create
          new affordable solutions in childcare that work for you and your
          community.
        </Paragraph>
        <LinkParagraph title={"Ready to get started?"} />
      </LeftElements>
      <RightElements>
        <img src={ShareImage} />
      </RightElements>
    </Article>
  );
};

export default ShareNanny;
