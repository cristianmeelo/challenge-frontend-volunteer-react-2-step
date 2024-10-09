import { useDispatch, useSelector } from 'react-redux';
import {
  setCategory,
  setColor,
  resetFilters,
} from '../../store/features/filter';
import Button from '../Button';

const Filter = () => {
  const dispatch = useDispatch();
  const { category, color } = useSelector((state) => state.filter);

  const handleCategoryChange = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const handleColorChange = (event) => {
    dispatch(setColor(event.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
  };

  return (
    <div className="flex pt-8 space-x-4">
      <div>
        <label htmlFor="category" className="block">
          Category:
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="border rounded p-2"
        >
          <option value="">Select Category</option>
          <option value="nature">Nature</option>
          <option value="animals">Animals</option>
          <option value="technology">Technology</option>
          <option value="people">People</option>
        </select>
      </div>

      <div>
        <label htmlFor="color" className="block">
          Color:
        </label>
        <select
          id="color"
          value={color}
          onChange={handleColorChange}
          className="border rounded p-2"
        >
          <option value="">Select Color</option>
          <option value="red">Red</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
        </select>
      </div>

      <Button onClick={handleResetFilters} disabled={!category && !color}>
        Reset Filters
      </Button>
    </div>
  );
};

export default Filter;
