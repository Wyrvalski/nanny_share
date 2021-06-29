import React from "react";
import { InputContainer } from "./style";
import PropTypes from "prop-types";

const Input = ({ placeHolder, type, inputRef, name }) => {
  return (
    <InputContainer
      name={name}
      {...inputRef}
      placeholder={placeHolder}
      type={type}
    />
  );
};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string,
  inputRef: PropTypes.any,
  name: PropTypes.string,
};

export default Input;
