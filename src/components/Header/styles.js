import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 99vw;
  #firstElements {
    display: flex;
    margin-left: 10px;
    ul {
      margin-left: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      a {
        margin-left: 32px;
        text-decoration: unset;
        color: white;
        font-size: 14px;
      }
      a:hover {
        color: blue;
      }
    }
  }

  #secondElement {
    display: flex;
    justify-content: space-between;
    margin-right: 20px;
    ul {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      a {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 20px;
        text-decoration: unset;
        color: white;
        font-size: 14px;
      }
      a:hover {
        color: blue;
      }
    }
  }

  @media only screen and (max-width: 900px) {
    #firstElements > ul {
      display: none;
    }
    #secondElement > ul > a:last-child {
      display: none;
    }
  }
`;
