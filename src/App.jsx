// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import Filters from './components/Filters';
// import Table from './components/Table';
import { useDispatch } from 'react-redux';
import './App.css'
import { useEffect } from 'react';
import Filters from './components/Filters';
import ReviewsTable from './components/ReviewsTable';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_REVIEWS' }); // Запрос на загрузку отзывов при загрузке страницы
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Отзывы компании</h1>
      {/* Фильтры */}
      <Filters />
      {/* Таблица отзывов */}
      <ReviewsTable />
    </div>
  );
};


// const App = () => {
//   const dispatch = useDispatch();
//   const reviews = useSelector((state) => state.reviews.filteredReviews);

//   useEffect(() => {
//     dispatch({ type: 'FETCH_REVIEWS' }); // Запрос на загрузку отзывов
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Отзывы компании</h1>
//       <ul>
//         {reviews.map((review) => (
//           <li key={review.id}>
//             <strong>{review.platform}</strong>: {review.text} ({review.rating}/5)
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

export default App

// function App() {
//   const reviews = useSelector((state) => state.reviews.filteredReviews);
//   // const [count, setCount] = useState(0)

//   return (
//     <div className="app">
//       <h1>Отзывы компании</h1>
//       <Filters />
//       <Table reviews={reviews} />
//     </div>
//   );
// }
