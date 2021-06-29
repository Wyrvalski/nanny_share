import React from "react";
import { InputContainer } from "./style";
import PropTypes from "prop-types";

const Input = ({ placeHolder, type, inputRef, name, isLoading }) => {
  return (
    <InputContainer
      name={name}
      {...inputRef}
      placeholder={placeHolder}
      type={type}
      disabled={isLoading}
    />
  );
};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputRef: PropTypes.any,
  name: PropTypes.string,
  isLoading: PropTypes.bool,
};

export default Input;
