import { all } from "redux-saga/effects";
import { favoriteSaga } from "../features/saga/favoriteSaga";
import { musicSaga } from "../features/saga/musicSaga";

export default function* rootSaga() {
  yield all([favoriteSaga(), musicSaga()]);
}
