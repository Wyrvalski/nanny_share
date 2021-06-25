import React from "react";
import { logoHeader } from "../../logos";
import { HeaderContainer } from "./styles";
import Button from "../../common/components/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <div id="firstElements">
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
      </div>
      <div id="secondElement">
        <Button
          title={"Become a Nanny Share Host"}
          widthButton={"220px"}
          heightButton={"40px"}
        />
        <ul>
          <a href="#">
            <li>SignIn</li>
          </a>
        </ul>
      </div>
    </HeaderContainer>
  );
};

export default Header;
