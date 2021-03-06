import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  max-width: 1200px;
  align-content: center;
  margin: auto;
  padding-bottom: 100px;
  @media only screen and (max-width: 900px) {
    padding: 16px;
    max-width: 525px;
  }
`;

export const Line = styled.hr`
  width: 70%;
  border: 1px solid #dfdfdf;
  margin-top: 120px;
  margin-bottom: 120px;

  @media only screen and (max-width: 900px) {
    width: 100%;
    margin-top: 60px;
    margin-bottom: 60px;
  }
`;
