import "./SearchBar.css";

function SearchBar({ onSearch }) {
  return (
    <div className="search-bar">
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Sök..."
        onChange={(event) => onSearch(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
