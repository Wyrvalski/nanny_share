import styled from "styled-components";

export const RightElements = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  img {
    width: 100%;
    min-width: 300px;
  }
`;

export const LeftElements = styled.section`
  max-width: 450px;
  padding: 15px;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p {
      text-align: center;
      padding-right: 0;
    }
  }
`;
