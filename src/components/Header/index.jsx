import React from "react";
import { logoHeader } from "../../images";
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
            <Link to="/create">Create Your Nanny Share</Link>
          </li>
          <li>
            <Link to="/browse">Browse Shares</Link>
          </li>
          <li>
            <Link to="/story">Our Story</Link>
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
            <Link to="/signin">Sign In</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
