import styled from "styled-components";

export const ShareNannyContainer = styled.article`
  display: flex;

  #rigthElements {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      width: 100%;
      height: auto;
    }
  }
  @media only screen and (max-width: 900px) {
    flex-direction: column-reverse;
    #leftElements {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        text-align: center;
        padding-right: 0;
      }
    }
  }
`;
