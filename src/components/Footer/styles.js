import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 100%;
  padding-top: 80px;
  margin-right: 80px;
  small {
    padding-top: 60px;
    padding-bottom: 20px;
    font-size: 12px;
    opacity: 0.6;
  }
  @media only screen and (max-width: 900px) {
    align-items: center;
    width: 100%;
    padding-top: 40px;
    small {
      padding-top: 0;
    }
  }
`;

export const CalendarButton = styled(Link)`
  background: #5e20a4;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-radius: 5px;
  margin-bottom: 24px;
  img {
    padding: 15px;
  }
`;

export const TextCalendar = styled.div`
  flex-direction: column;
  color: white;
  width: 220px;
  p {
    line-height: 20px;
  }
  span {
    font-size: 12px;
  }
`;

export const SectionFooter = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  padding-top: 60px;
  height: 76px;
  #hapu-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 25%;
  }
  ul {
    display: flex;
    flex-direction: row;
    li {
      padding: 30px;
      a {
        text-decoration: unset;
        color: #3d3d3d;
      }
      a:hover {
        color: blue;
      }
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    height: auto;
    #hapu-logo {
      width: auto;
    }
    p {
      font-size: 16px;
    }
    ul {
      padding-top: 16px;
      justify-content: center;
      width: 300px;
      flex-wrap: wrap;
      li {
        padding: 15px;
      }
    }
  }
`;

export const SocialNetwork = styled.div`
  width: 25%;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  img {
    margin: 10px;
    cursor: pointer;
  }
  @media only screen and (max-width: 900px) {
    padding-top: 15px;
    justify-content: center;
  }
`;

export const LineFooter = styled.hr`
  @media only screen and (max-width: 900px) {
    border: 2px solid #dfdfdf;
    width: 95%;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;
