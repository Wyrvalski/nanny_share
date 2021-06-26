import React from "react";
import { logoHeader } from "../../logos";
import { HeaderContainer } from "./styles";
import ButtonLink from "../../common/components/ButtonLink";

const Header = () => {
  return (
    <HeaderContainer>
      <nav id="firstElements">
        <img src={logoHeader}></img>
        <ul>
          <a href="#">
            <li>Create Your Nanny Share</li>
          </a>
          <a href="#">
            <li>Browse Shares</li>
          </a>
          <a href="#">
            <li>Our Story</li>
          </a>
        </ul>
      </nav>
      <nav id="secondElement">
        <ul>
          <ButtonLink
            title={"Become a Nanny Share Host"}
            widthButton={"220px"}
            heightButton={"40px"}
          />
          <a href="#">
            <li>Sign In</li>
          </a>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
