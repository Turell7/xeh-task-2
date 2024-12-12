import { call, put, takeLatest } from "redux-saga/effects";
import { applyFiltersAndSort, setReviews } from "./reviewsSlice";
import { fetchReviewsAPI } from "../mock/mock";

function* fetchReviews() {
    try {
    const reviews = yield call(fetchReviewsAPI);
    // const fakeReviews = [
    //   {
    //     id: 1,
    //     platform: 'Google',
    //     rating: 4,
    //     date: '2023-11-15T10:00:00Z',
    //     text: 'Отличный сервис!',
    //   },
    //   {
    //     id: 2,
    //     platform: 'Яндекс',
    //     rating: 3,
    //     date: '2023-11-14T09:00:00Z',
    //     text: 'Хорошо, но есть недочёты.',
    //   },
    //   {
    //     id: 3,
    //     platform: '2ГИС',
    //     rating: 5,
    //     date: '2023-11-13T08:00:00Z',
    //     text: 'Прекрасно!',
    //   },
    // ];
    yield put(setReviews(reviews));
    yield put(applyFiltersAndSort());
} catch (error) {
  console.error('Ошибка загрузки отзывов:', error);
}
  }
  
  export default function* rootSaga() {
    yield takeLatest('FETCH_REVIEWS', fetchReviews);
  }