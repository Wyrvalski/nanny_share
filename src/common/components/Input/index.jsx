import React from "react";
import { InputContainer } from "./style";
import PropTypes from "prop-types";

const Input = ({ placeHolder, type, ref }) => {
  return <InputContainer ref={ref} placeholder={placeHolder} type={type} />;
};

Input.propTypes = {
  placeHolder: PropTypes.string.isRequired,
  type: PropTypes.string,
  ref: PropTypes.any,
};

export default Input;
