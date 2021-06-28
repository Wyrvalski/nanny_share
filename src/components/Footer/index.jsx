import React from "react";
import {
  CalendarButton,
  FooterContainer,
  LineFooter,
  SectionFooter,
  SocialNetwork,
  TextCalendar,
} from "./styles";
import SubTitle from "../../common/components/SubTitle";
import Paragraph from "../../common/components/Paragraph";
import {
  CalendarImage,
  FacebookLogo,
  HapuLogo,
  InstagramLogo,
  TwitterLogo,
} from "../../logos";
import Link from "../../common/components/Link";

const Footer = () => {
  return (
    <FooterContainer>
      <SubTitle title={"Become a nanny share host"} />
      <Paragraph align={"center"} fontSize={"18px"}>
        Takes less than 5 minutes to get started
      </Paragraph>
      <CalendarButton href="/#">
        <img src={CalendarImage} />
        <TextCalendar>
          <p>Create Your Nanny Share</p>
          <span>Takes less than 5 minutes</span>
        </TextCalendar>
      </CalendarButton>
      <Link title={"Or browse local nanny-shares"} />
      <SectionFooter>
        <div id="hapu-logo">
          <img src={HapuLogo} />
        </div>

        <nav>
          <ul>
            <li>
              <a href="/#">Share Your Nanny</a>
            </li>
            <li>
              <a href="/#">Our Story</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Terms & Privacy</a>
            </li>
          </ul>
        </nav>
        <SocialNetwork>
          <a href="/#">
            <img src={FacebookLogo} />
          </a>
          <a href="/#">
            <img src={InstagramLogo} />
          </a>
          <a href="/#">
            <img src={TwitterLogo} />
          </a>
        </SocialNetwork>
      </SectionFooter>
      <LineFooter />
      <small>Copyright © 2017 Hapu PTY Limited All rights reserved</small>
    </FooterContainer>
  );
};

export default Footer;
