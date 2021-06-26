import React from "react";
import { LinkContainer } from "./styles";
import PropTypes from "prop-types";

export const Link = ({ colorLink, title, marginLink }) => {
  return (
    <LinkContainer colorLink={colorLink} marginLink={marginLink}>
      {title}
    </LinkContainer>
  );
};

Link.propTypes = {
  colorLink: PropTypes.string,
  title: PropTypes.string.isRequired,
  marginLink: PropTypes.string,
};

export default Link;
