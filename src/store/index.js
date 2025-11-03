import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import sagas from "../Sagas";
import moviesReducer from "./moviesSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: moviesReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(sagas);

export default store;
