import { all } from 'redux-saga/effects';
import { favoriteSaga } from '../features/saga/favoriteSaga';

export default function* rootSaga() {
  yield all([favoriteSaga()]);
}