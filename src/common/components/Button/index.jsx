import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./styles";

const Button = ({ title, widthButton, heightButton }) => {
  return (
    <ButtonContainer widthButton={widthButton} heightButton={heightButton}>
      {title}
    </ButtonContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  widthButton: PropTypes.string,
  heightButton: PropTypes.string,
};

export default Button;
