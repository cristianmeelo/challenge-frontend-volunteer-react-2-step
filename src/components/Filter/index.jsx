import { useDispatch, useSelector } from 'react-redux';
import { resetFilters, setAuthor } from '../../store/features/filter';
import Button from '../Button';

const Filter = ({ handleShowFavorites, showFavorites, authors }) => {
  const dispatch = useDispatch();
  const { author } = useSelector((state) => state.filter);

  const handleAuthorChange = (event) => {
    dispatch(setAuthor(event.target.value)); // Use a ação setAuthor
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 align-center">
      <div className="flex-1">
        <label htmlFor="author" className="block mb-2 font-semibold">
          Author:
        </label>
        <select
          id="author"
          value={author}
          onChange={handleAuthorChange}
          className="border rounded p-2 w-full"
          aria-label="Select Author"
        >
          <option value="">Select Author</option>
          {authors.map((authorName, index) => (
            <option key={index} value={authorName}>
              {authorName}
            </option>
          ))}
        </select>
      </div>

      <div className="flex space-x-2">
        <Button onClick={handleResetFilters} disabled={!author}>
          Reset Filters
        </Button>
        <Button onClick={handleShowFavorites}>
          {showFavorites ? 'See all' : '🖤 See favorites'}
        </Button>
      </div>
    </div>
  );
};

export default Filter;
