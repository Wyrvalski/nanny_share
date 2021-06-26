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
  padding-top: 30px;
  height: 48px;
  input {
    margin-right: 20px;
    padding: 10px;
  }
  a {
    color: white;
  }
`;
