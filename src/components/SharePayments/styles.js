import styled from "styled-components";

export const LeftElements = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 50%;
  img {
    width: 100%;
    min-width: 300px;
    max-width: 400px;
  }
`;

export const RightElements = styled.section`
  margin-left: 20px;
  max-width: 600px;
  width: 100%;
  padding: 10px;
  margin: auto;
  p {
    text-align: left;
    max-width: 500px;
  }

  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    p {
      max-width: 100%;
      text-align: center;
    }
    a {
      text-align: center;
    }
  }
`;
