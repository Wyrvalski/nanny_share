import React from "react";
import { ParagraphContainer } from "./styles";
import PropTypes from "prop-types";

const Paragraph = ({ children, align, fontSize, widthSize }) => {
  return (
    <ParagraphContainer widthSize={widthSize} align={align} fontSize={fontSize}>
      {children}
    </ParagraphContainer>
  );
};

Paragraph.propTypes = {
  widthSize: PropTypes.any,
  children: PropTypes.any.isRequired,
  align: PropTypes.string.isRequired,
  fontSize: PropTypes.string,
};

export default Paragraph;
