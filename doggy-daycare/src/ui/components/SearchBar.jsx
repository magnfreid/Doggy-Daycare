import { useState } from "react";
import "./SearchBar.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

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
        <FormControl
          fullWidth
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "#f5f5f5",
            borderRadius: 1,
          }}
        >
          <InputLabel
            id="sort-label"
            sx={{
              backgroundColor: "#f5f5f5",
              px: 0.5,
              borderRadius: 0.5,
              border: "0.5px solid #2a2a2aff",
            }}
          >
            Sortera efter:
          </InputLabel>
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

        <IconButton
          onClick={handleReverseChange}
          sx={{
            backgroundColor: "#eaeaeaff",
            "&:hover": { backgroundColor: "#ffffff99" },
          }}
        >
          {reversed ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
        </IconButton>
      </div>
    </div>
  );
}

export default SearchBar;
