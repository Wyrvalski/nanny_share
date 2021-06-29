import * as types from "./actions/types";
import { put, call } from "redux-saga/effects";
import { sendService } from "../services/userServices";

export function* sendForm(payload) {
  try {
    const response = yield call(sendService, payload);
    yield put({ type: types.SEND_SUCCESS, response });
  } catch (error) {
    const errorData = error?.response?.data;
    yield put({ type: types.SEND_FAIL, errorData });
  }
}
