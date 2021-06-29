import React from "react";
import { ImagePerChild } from "../../images";
import SubTitle from "../../common/components/SubTitle";
import { LeftElements, RightElements } from "./styles";
import Link from "../../common/components/LinkParagraph";
import Article from "../../common/components/Article";
import Paragraph from "../../common/components/Paragraph";

const SharePayments = () => {
  return (
    <Article>
      <LeftElements>
        <img src={ImagePerChild} />
      </LeftElements>
      <RightElements>
        <SubTitle title={"Shared payments made simple"} />
        <Paragraph align={"left"}>
          Sometimes it’s hard enough just sharing a restaurant bill. Try sharing
          that bill week in, week out and you might encounter more than a few
          snares. But not with Hapu. Simply set your rates and our automated
          payment system takes care of the rest. You need never talk money or
          who owes what.
        </Paragraph>
        <Link
          title={"Read how Bridget’s share (without Hapu) ended over $15"}
        />
      </RightElements>
    </Article>
  );
};

export default SharePayments;
