import React from "react";

const SearchBar = ({ query, setQuery, onSearch }) => {
  return (
    <div className="position-relative w-100 mx-auto">
      <input
        type="text"
        className="form-control p-3 border rounded shadow-sm"
        placeholder="🔍 Search for products..."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch(e.target.value);
        }}
        style={{
          fontSize: "1.1rem",
          transition: "all 0.3s ease-in-out",
          border: "2px solid #007bff",
          outline: "none",
        }}
        onFocus={(e) => (e.target.style.boxShadow = "0 0 10px rgba(0, 123, 255, 0.5)")}
        onBlur={(e) => (e.target.style.boxShadow = "none")}
      />
    </div>
  );
};

export default SearchBar;
