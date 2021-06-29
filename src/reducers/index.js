import * as types from "../sagas/actions/types";

const initialState = {
  name: "",
  email: "",
  errorEmail: "",
  errorName: "",
  isLoading: false,
  success: false,
};

export const user = (state = initialState, action = null) => {
  if (action.type === types.SEND_SUCCESS) {
    return {
      name: action.payload.user.name,
      email: action.payload.user.email,
      isLoading: false,
      success: true,
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
      ...state,
      isLoading: true,
    };
  }
};
