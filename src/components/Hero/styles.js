import styled from "styled-components";

export const HeroContainer = styled.section`
  background-image: linear-gradient(
      314.72deg,
      #c86dd7 -1.5%,
      #7e49c3 39.43%,
      #5912ac 86.02%
    ),
    url("/images/header-image.png");
  background-position: center;
  background-blend-mode: overlay;
  background-repeat: no-repeat;
  background-size: cover;
  height: 616px;
  align-items: center;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 900px) {
    height: 540px;
  }
`;

export const ContentHero = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  max-width: 1440px;
  @media only screen and (max-width: 900px) {
    max-width: 600px;
  }
`;

export const LeftContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 40px;
  h1 {
    font-size: 40px;
    font-family: Inter;
    color: white;
    line-height: 48px;
  }
  h3 {
    margin-top: 24px;
    font-family: Inter;
    font-size: 18px;
    line-height: 24px;
    color: white;
  }
  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-left: 20px;
    margin-right: 15px;
    align-items: center;
    h1 {
      justify-content: center;
      text-align: center;
    }
    h3 {
      text-align: center;
    }
  }
`;

export const RightContent = styled.div`
  width: 30%;
  margin-right: 60px;
  display: flex;
  justify-content: center;
  h1 {
    font-size: 40px;
    font-family: Inter;
    color: white;
  }
  img {
    width: 100%;
    max-width: 316px;
    height: auto;
  }
  @media only screen and (max-width: 900px) {
    margin-right: 20px;
    display: none;
  }
`;

export const LinkButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

export const PlayButton = styled.img`
  &:hover {
    cursor: pointer;
  }
`;
