import { useSelector } from 'react-redux';

const ReviewsTable = () => {
  const reviews = useSelector((state) => state.reviews.filteredReviews);

  return (
    <table border="1" style={{ width: "100%", marginTop: "20px" }}>
      <thead>
        <tr>
          <th>Платформа</th>
          <th>Рейтинг</th>
          <th>Дата</th>
          <th>Отзыв</th>
        </tr>
      </thead>
      <tbody>
        {reviews.map((review) => (
          <tr key={review.id}>
            <td>{review.platform}</td>
            <td>{review.rating}</td>
            <td>{new Date(review.date).toLocaleString()}</td>
            <td>{review.text}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default ReviewsTable;