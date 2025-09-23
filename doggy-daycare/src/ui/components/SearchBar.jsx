import { useState } from "react";
import "./SearchBar.css";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

function SearchBar({ onSearch, onSortChange, onReverseSort }) {
  const [sortBy, setSortBy] = useState("name");
  const [reversed, setReversed] = useState(false);

  const handleSortChange = (event) => {
    const selection = event.target.value;
    setSortBy(selection);
    onSortChange(selection);
  };

  const handleReverseChange = () => {
    setReversed(!reversed);
    onReverseSort(!reversed);
  };
  return (
    <div className="search-bar">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Sök..."
        onChange={(event) => onSearch(event.target.value)}
      />
      <div className="sort">
        <FormControl fullWidth variant="outlined" size="small">
          <InputLabel id="sort-label">Sortera efter</InputLabel>
          <Select
            labelId="sort-label"
            value={sortBy}
            label="Sortera efter"
            onChange={handleSortChange}
          >
            <MenuItem value="name">Namn</MenuItem>
            <MenuItem value="breed">Ras</MenuItem>
            <MenuItem value="owner">Ägare</MenuItem>
            <MenuItem value="active">Aktiv</MenuItem>
          </Select>
        </FormControl>
        <button onClick={() => handleReverseChange()}>
          {reversed ? "⬆" : "⬇"}
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
