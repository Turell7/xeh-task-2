import { call, put, takeLatest } from "redux-saga/effects";
import { applyFiltersAndSort, setReviews } from "./reviewsSlice";
import { fetchReviewsAPI } from "../mock/mock";

function* fetchReviews() {
    try {
    const reviews = yield call(fetchReviewsAPI);

    yield put(setReviews(reviews));
    yield put(applyFiltersAndSort());
} catch (error) {
  console.error('Ошибка загрузки отзывов:', error);
}
  }
  
  export default function* rootSaga() {
    yield takeLatest('FETCH_REVIEWS', fetchReviews);
  }