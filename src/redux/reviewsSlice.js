import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allReviews: [],
  filteredReviews: [],
  filters: {
    platform: '',
    minRating: 1,
    maxRating: 5,
  },
  sort: {
    by: 'date', 
    order: 'desc',
  },
};

const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews(state, action) {
      state.allReviews = action.payload;
      state.filteredReviews = action.payload;
    },
    setFilters(state, action) {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSort(state, action) {
      state.sort = action.payload;
    },
    applyFiltersAndSort(state) {
      const filters = state.filters;
      const sort = state.sort;

      let result = [...state.allReviews];

      if (filters.platform) {
        result = result.filter((review) => review.platform === filters.platform);
      }

      result = result.filter(
        (review) =>
          review.rating >= filters.minRating && review.rating <= filters.maxRating
      );

      result.sort((a, b) => {
        if (sort.by === 'date') {
          return sort.order === 'asc'
            ? new Date(a.date) - new Date(b.date)
            : new Date(b.date) - new Date(a.date);
        }
        if (sort.by === 'rating') {
            return sort.order === 'asc' ? a.rating - b.rating : b.rating - a.rating;
        }
        return 0;
      });
      state.filteredReviews = result;
    },
  },
});
export const { setReviews, setFilters, setSort, applyFiltersAndSort } =
  reviewsSlice.actions;
export default reviewsSlice.reducer;