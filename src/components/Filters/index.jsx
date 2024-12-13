import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { applyFiltersAndSort, setFilters, setSort } from "../../redux/reviewsSlice";

const Filters = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [platform, setPlatform] = useState('');
  const [minRating, setMinRating] = useState(1);
  const [maxRating, setMaxRating] = useState(5);
  const [sortBy, setSortBy] = useState('date');
  const [sortOrder, setSortOrder] = useState('desc');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilters({ platform, minRating, maxRating, searchQuery }));
    dispatch(applyFiltersAndSort());
  }, [platform, minRating, maxRating, searchQuery, dispatch]);

  useEffect(() => {
    dispatch(setSort({ by: sortBy, order: sortOrder }));
    dispatch(applyFiltersAndSort());
  }, [sortBy, sortOrder, dispatch]);

  return (
    <div>
      <h3>Фильтры</h3>

      <label>
        Поиск в тексте:
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </label>

      <label>
        Платформа:
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
        >
          <option value="">Все платформы</option>
          <option value="Google">Google</option>
          <option value="Яндекс">Яндекс</option>
          <option value="2ГИС">2ГИС</option>
        </select>
      </label>

      <label>
        Рейтинг от:
        <input
          type="number"
          min="1"
          max="5"
          value={minRating}
          onChange={(e) => setMinRating(Number(e.target.value))}
        />
      </label>
      <label>
        до:
        <input
          type="number"
          min="1"
          max="5"
          value={maxRating}
          onChange={(e) => setMaxRating(Number(e.target.value))}
        />
      </label>

      <label>
        Сортировать по:
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="date">Дате</option>
          <option value="rating">Рейтингу</option>
        </select>
      </label>
      <label>
        Порядок:
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">По возрастанию</option>
          <option value="desc">По убыванию</option>
        </select>
      </label>
    </div>
  );
};

export default Filters;