import React from "react";
import LinkParagraph from "../../common/components/LinkParagraph";
import { ImageAvailable } from "../../images";
import { AvalaleContainer } from "./styles";

const AvailableNanny = () => {
  return (
    <AvalaleContainer>
      <img src={ImageAvailable} />
      <LinkParagraph title={"Sarah’s day care available now in North Sydney"} />
      <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
    </AvalaleContainer>
  );
};

export default AvailableNanny;
