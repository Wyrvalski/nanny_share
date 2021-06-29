import * as types from "../sagas/actions/types";

const initialState = {
  name: "",
  email: "",
  errorEmail: "",
  errorName: "",
  isLoading: false,
};

export const user = (state = initialState, action = null) => {
  if (action.type === types.SEND_SUCCESS) {
    return {
      name: action.user.name,
      email: action.user.email,
      isLoading: false,
    };
  } else if (action.type === types.SEND_FAIL) {
    const response = action?.errorData;
    return {
      errorEmail: response?.email,
      errorName: response?.name,
      isLoading: false,
    };
  } else if (action.type === types.SEND_REQUEST) {
    return {
      isLoading: true,
    };
  }
};
