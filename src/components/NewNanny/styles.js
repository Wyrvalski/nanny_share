import styled from "styled-components";

export const SendContainer = styled.section`
  display: flex;
  flex-direction: row;
  padding-top: 20px;
  .input-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .MuiPaper-root {
    margin-top: 120px;
    color: red;
    position: absolute;
  }
  a {
    color: white;
  }

  @media only screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .MuiPaper-root {
      color: red;
      position: relative;
      margin: 5px;
      width: 100%;
      padding: 2px;
    }
    button {
      width: 320px;
      margin-left: 0;
      margin-top: 5px;
    }
    .input-container {
      align-items: center;
      justify-content: center;
      margin: 10px;
    }
    a {
      margin: 3px 0 0 0;
      width: 300px;
    }
    input {
      margin: 0 0 0 0;
      width: 300px;
      height: 28px;
    }
  }
`;
