import styled from "styled-components";

export const AvalaleContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: white;
  padding-top: 28px;
  padding-bottom: 28px;
  border: 1px solid #dfdfdf;
  img {
    padding-right: 32px;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    height: 216px;
    img {
      padding: 15px;
    }
    a {
      line-height: 24px;
      width: 212px;
      text-align: center;
      padding-bottom: 15px;
    }
  }
`;
