// Filter.js
import { useDispatch } from "react-redux";
import { setFilter } from "./productsSlice";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="filter">Filter by category: </label>
      <select id="filter" onChange={handleFilterChange}>
        <option value="">All</option>
        <option value="men's clothing">Men&#39;s Clothing</option>
        <option value="women's clothing">Women&#39;s Clothing</option>
        <option value="jewelery">Jewelery</option>
        <option value="electronics">Electronics</option>
      </select>
    </div>
  );
};

export default Filter;
