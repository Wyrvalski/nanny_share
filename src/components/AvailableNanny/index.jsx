import React from "react";
import Link from "../../common/components/Link";
import { ImageAvailable } from "../../logos";
import { AvalaleContainer } from "./styles";

const AvailableNanny = () => {
  return (
    <AvalaleContainer>
      <img src={ImageAvailable} />
      <Link title={"Sarah’s day care available now in North Sydney"} />
      <span>Wednesday, Thursday, Friday - 7:30 - 5:30</span>
    </AvalaleContainer>
  );
};

export default AvailableNanny;
