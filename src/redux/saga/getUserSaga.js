import { call, put, takeLatest } from "redux-saga/effects";
import { setUser } from "../actions/userAction";
import { requestGetUser } from "./requests";
import * as actionTypes from "../types/userTypes";

function* getUserSaga(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;

    yield put(setUser(data));
  } catch (err) {
    console.log(err);
  }
}

export function* watcherGetUserSaga() {
  yield takeLatest(actionTypes.GET_USER, getUserSaga);
}
