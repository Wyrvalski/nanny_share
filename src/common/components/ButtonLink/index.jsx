import React from "react";
import PropTypes from "prop-types";
import { ButtonContainer } from "./styles";
import { IconLoader } from "../../../logos";

const ButtonLink = ({
  title,
  widthButton,
  heightButton,
  type = "submit",
  isLoading = false,
}) => {
  return (
    <ButtonContainer
      type={type}
      widthButton={widthButton}
      heightButton={heightButton}
      isLoading={isLoading}
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
};

export default ButtonLink;
