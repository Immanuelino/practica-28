// FilteredList.js
import React from 'react';

function FilteredList({ items, filterText }) {
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="FilteredList">
      <h2>Películas /Filter/</h2>
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;
