// SearchBox.js
import React from 'react';

function SearchBox({ onFilterTextChange }) {
  const handleChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  return (
    <div className="SearchBox">
      <input
        type="text"
        placeholder="Buscar..."
        className="SearchInput"
        onChange={handleChange}
      />
    </div>
  );
}

export default SearchBox;
