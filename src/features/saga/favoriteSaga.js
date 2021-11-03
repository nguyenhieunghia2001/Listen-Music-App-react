import { call, takeEvery, put } from "redux-saga/effects";
import { sagaActions } from "./sagaActions";
import { addFavorite } from "../setting/favoriteSlice";

// let callAPI = async ({ url, method, data }) => {
//   return await Axios({
//     url,
//     method,
//     data
//   });
// };

export function* fetchDataSaga() {
  try {
    // let result = yield call(() =>
    //   callAPI({ url: "https://5ce2c23be3ced20014d35e3d.mockapi.io/api/todos" })
    // );
    console.log("oke");
    // yield put(addFavorite(result.data));
  } catch (e) {
    yield put({ type: "TODO_ADD" });
  }
}

export function* favoriteSaga() {
  yield takeEvery(sagaActions.FETCH_ADD, fetchDataSaga);
}
