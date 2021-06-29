import React from "react";
import { LinkContainer } from "./styles";
import PropTypes from "prop-types";

export const LinkParagraph = ({ colorLink, title, marginLink }) => {
  return (
    <LinkContainer colorLink={colorLink} marginLink={marginLink}>
      {title}
    </LinkContainer>
  );
};

LinkParagraph.propTypes = {
  colorLink: PropTypes.string,
  title: PropTypes.string.isRequired,
  marginLink: PropTypes.string,
};

export default LinkParagraph;
