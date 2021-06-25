import styled from "styled-components";

export const HeroContainer = styled.div`
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
  @media only screen and (max-width: 600px) {
    height: 540px;
  }
`;

export const ContentHero = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  margin-top: -60px;
`;

export const LeftContent = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 40px;
  h1 {
    font-size: 40px;
    font-family: Inter;
    color: white;
  }
  h3 {
    margin-top: 24px;
    font-family: Inter;
    font-size: 18px;
    color: white;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 15px;
    margin-right: 15px;
    align-items: center;
    h1 {
      justify-content: center;
      width: 80%;
      text-align: center;
    }
    h3 {
      text-align: center;
    }
  }
  @media only screen and (max-width: 900px) {
    margin-left: 20px;
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
  @media only screen and (max-width: 600px) {
    display: none;
  }
  @media only screen and (max-width: 900px) {
    margin-right: 20px;
  }
`;
