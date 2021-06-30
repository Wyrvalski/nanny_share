import * as types from "../sagas/actions/types";

const initialState = {
  name: "",
  email: "",
  error: "",
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
      error: null,
    };
  } else if (action.type === types.SEND_FAIL) {
    const response = action?.errorData;
    return {
      error: response,
      isLoading: false,
      success: false,
    };
  } else if (action.type === types.SEND_REQUEST) {
    return {
      ...state,
      isLoading: true,
      success: false,
      error: null,
    };
  }
};
