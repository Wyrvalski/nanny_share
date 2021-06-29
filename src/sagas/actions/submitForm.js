import * as types from "./types";

export const saveInfo = (user) => {
  return {
    type: types.SEND_REQUEST,
    user,
    isLoading: true,
  };
};
