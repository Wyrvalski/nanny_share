import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkContainer = styled(Link)`
  text-decoration: underline;
  cursor: pointer;
  text-underline-offset: 1px;
  &:hover {
    color: blue;
  }
  color: ${({ colorLink }) => {
    return colorLink || "#5E20A4";
  }};
  margin: ${({ marginLink }) => {
    return marginLink || "0 0 0 0";
  }};
  text-align: ${({ align }) => {
    return align || "letft";
  }};
`;
