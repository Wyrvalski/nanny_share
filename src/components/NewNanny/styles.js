import styled from "styled-components";

export const NewNannyContainer = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    max-width: 100%;
    padding: 15px;
    text-align: center;
  }
`;

export const SendContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  height: 48px;
  a {
    color: white;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 180px;
    a {
      margin: 3px 0 0 0;
      width: 348px;
    }
    input {
      margin: 0 0 0 0;
      width: 328px;
      height: 28px;
    }
  }
`;
