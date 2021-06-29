import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./styles";
import { IconLoader } from "../../../images";

const ButtonLink = ({
  title,
  widthButton,
  heightButton,
  type = "submit",
  isLoading = false,
  onClick,
}) => {
  return (
    <ButtonContainer
      type={type}
      widthButton={widthButton}
      heightButton={heightButton}
      isLoading={isLoading}
      onClick={onClick}
    >
      {isLoading ? <img width={"30px"} src={IconLoader} /> : title}
    </ButtonContainer>
  );
};

ButtonLink.propTypes = {
  title: PropTypes.string.isRequired,
  widthButton: PropTypes.string,
  heightButton: PropTypes.string,
  type: PropTypes.string,
  isLoading: PropTypes.bool,
  onClick: PropTypes.any,
};

export default ButtonLink;
