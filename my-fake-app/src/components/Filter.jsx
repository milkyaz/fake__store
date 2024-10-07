// Filter.js
import { useDispatch } from "react-redux";
import { setFilter } from "../store/productsSlice";
import "./filter.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Category</InputLabel>
          <Select id="filter" label="Category" onChange={handleFilterChange}>
            <MenuItem value="">All</MenuItem>
            <MenuItem value="men's clothing">Men&#39;s Clothing</MenuItem>
            <MenuItem value="women's clothing">Women&#39;s Clothing</MenuItem>
            <MenuItem value="jewelery">Jewelery</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};

export default Filter;
