import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
      }
    }
  }

  #secondElement {
    display: flex;
    margin-right: 25px;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 25px;
      a {
        text-decoration: unset;
        color: white;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    #firstElements > ul {
      display: none;
    }
  }
`;
