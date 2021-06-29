import styled from "styled-components";

export const SendContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  height: 48px;
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  span {
    margin-top: 10px;
    color: red;
  }
  a {
    color: white;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    min-height: 220px;
    button {
      width: 100%;
      margin-left: 0;
    }
    .input-container {
      align-items: center;
      justify-content: center;
    }
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
