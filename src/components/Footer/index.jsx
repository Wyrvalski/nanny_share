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
import LinkParagraph from "../../common/components/LinkParagraph";
import { Link } from "react-router-dom";

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
      <LinkParagraph title={"Or browse local nanny-shares"} />
      <SectionFooter>
        <div id="hapu-logo">
          <img src={HapuLogo} />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/#">Share Your Nanny</Link>
            </li>
            <li>
              <Link to="/">Our Story</Link>
            </li>
            <li>
              <Link to="/">Blog</Link>
            </li>
            <li>
              <Link to="/">Terms & Privacy</Link>
            </li>
          </ul>
        </nav>
        <SocialNetwork>
          <Link to="/">
            <img src={FacebookLogo} />
          </Link>
          <Link to="/">
            <img src={InstagramLogo} />
          </Link>
          <Link to="/">
            <img src={TwitterLogo} />
          </Link>
        </SocialNetwork>
      </SectionFooter>
      <LineFooter />
      <small>Copyright © 2017 Hapu PTY Limited All rights reserved</small>
    </FooterContainer>
  );
};

export default Footer;
