import styled from "styled-components";

export const LeftElements = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    min-width: 300px;
  }
`;

export const RightElements = styled.section`
  margin-left: 20px;
  max-width: 600px;
  width: 100%;
  p {
    text-align: left;
  }

  @media only screen and (max-width: 900px) {
    p {
      text-align: center;
    }
  }

  @media only screen and (max-width: 1550px) {
    max-width: 450px;
  }
`;
