import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import reviewsReducer from './reviewsSlice';
import rootSaga from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    reviews: reviewsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;