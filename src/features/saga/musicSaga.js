import { put, takeLatest, call } from "redux-saga/effects";
import { fetch, setSong } from "../setting/songSlice";
import axios from "axios";

let callAPI = async ({ url, method, data }) => {
  return await axios({
    url,
    method,
    data,
  });
};
function* fetchDataSaga() {
  try {
    const { data } = yield call(() =>
      callAPI({ url: "https://g0lq8.sse.codesandbox.io/sings" })
    );
    yield put(setSong(data));
  } catch (e) {
    yield put({ type: "FETCH" });
  }
}

export function* musicSaga() {
  yield takeLatest(fetch.type, fetchDataSaga);
}
