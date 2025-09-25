import "./FilterBar.css";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";

function FilterBar({ breeds, filters, onFilterChange }) {
  return (
    <div className="filter-bar">
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
          id="breed-filter-label"
          sx={{
            backgroundColor: "#f5f5f5",
            px: 0.5,
            // borderRadius: 0.5,
            // border: "0.5px solid #2a2a2aff",
          }}
        >
          Filtrera efter ras:
        </InputLabel>
        <Select
          labelId="breed-filter-label"
          multiple
          value={filters}
          label="Filtrera"
          onChange={(e) => onFilterChange(e.target.value)}
          renderValue={() => {
            filters.breed;
          }}
        >
          {breeds
            .sort((a, b) => a.breed - b.breed)
            .map((entry) => (
              <MenuItem key={entry.breed} value={entry.breed}>
                <ListItemText
                  primary={`${
                    entry.breed.charAt(0).toUpperCase() + entry.breed.slice(1)
                  } (${entry.amount})`}
                />{" "}
                <Checkbox checked={filters.indexOf(entry.breed) > -1} />
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <button onClick={() => onFilterChange([])} disabled={filters.length <= 0}>
        {`Rensa(${filters.length})`}
      </button>
    </div>
  );
}

export default FilterBar;
