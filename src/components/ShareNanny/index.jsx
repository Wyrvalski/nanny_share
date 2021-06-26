import React from "react";
import SubTitle from "../../common/components/SubTitle";
import { ShareImage } from "../../logos";
import { ShareNannyContainer } from "./styles";
import Link from "../../common/components/Link";

const ShareNanny = () => {
  return (
    <ShareNannyContainer>
      <div id="leftElements">
        <SubTitle title={`Share your home, nanny and costs`} width={"300px"} />
        <p>
          You have a fantastic home, a fantastic nanny and wouldn’t cutting your
          costs in half be, well, fantastic?! If only it was easy to connect
          with other parents to share your costs? Well now it is, with Hapu.
          <Link title={" Hapu means tribe"} /> and it’s our foundational 3
          tribal principles that empowers you to create and manage your own
          tribe. A tribe that together has the power to create new affordable
          solutions in childcare that work for you and your community.
        </p>
        <Link title={"Ready to get started?"} />
      </div>
      <div id="rigthElements">
        <img src={ShareImage} />
      </div>
    </ShareNannyContainer>
  );
};

export default ShareNanny;
