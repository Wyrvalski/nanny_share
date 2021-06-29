import React from "react";
import { logoHeader } from "../../logos";
import { HeaderContainer } from "./styles";
import ButtonLink from "../../common/components/ButtonLink";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <HeaderContainer>
      <nav id="firstElements">
        <img src={logoHeader}></img>
        <ul>
          <li>
            <Link to="/">Create Your Nanny Share</Link>
          </li>
          <li>
            <Link to="/">Browse Shares</Link>
          </li>
          <li>
            <Link to="/">Our Story</Link>
          </li>
        </ul>
      </nav>
      <nav id="secondElement">
        <ul>
          <ButtonLink
            title={"Become a Nanny Share Host"}
            widthButton={"220px"}
            heightButton={"40px"}
          />
          <li>
            <Link to="/">Sign In</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
