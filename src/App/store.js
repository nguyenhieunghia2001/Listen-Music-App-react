import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import favoriteReducer from "../features/setting/favoriteSlice";
import songReducer from "../features/setting/songSlice";
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();
// const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

const rootReducer = {
  favorite: favoriteReducer,
  music: songReducer
};
const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
