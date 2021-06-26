import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./styles";

const ButtonLink = ({ title, widthButton, heightButton }) => {
  return (
    <ButtonContainer widthButton={widthButton} heightButton={heightButton}>
      <li>{title}</li>
    </ButtonContainer>
  );
};

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  widthButton: PropTypes.string,
  heightButton: PropTypes.string,
};

export default ButtonLink;
