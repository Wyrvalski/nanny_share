import React from "react";
import { SubTitleContainer } from "./styles";
import PropTypes from "prop-types";

export const SubTitle = ({ title, width, center, font }) => {
  return (
    <SubTitleContainer font={font} center={center} width={width}>
      {title}
    </SubTitleContainer>
  );
};

SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.string,
  center: PropTypes.bool,
  font: PropTypes.string,
};

export default SubTitle;
