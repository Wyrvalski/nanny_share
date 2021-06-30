import styled from "styled-components";

export const SubTitleContainer = styled.h2`
  color: #3d3d3d;
  line-height: 32px;
  font-size: ${({ font }) => {
    return font || "28px";
  }};
  text-align: ${({ center }) => {
    return center || "left";
  }};
  width: ${({ width }) => {
    return width || "auto";
  }};
  @media only screen and (max-width: 900px) {
    text-align: center;
    padding: ${({ paddingDevice }) => {
      return paddingDevice || "0px";
    }};
    font-size: ${({ font }) => {
      return font || "22px";
    }};
  }
`;
