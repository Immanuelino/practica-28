// App.js
import React, { useState } from 'react';
import FilteredList from './FilteredList';
import SearchBox from './SearchBox';
import img1 from './img1.jpeg'; // Importar la imagen
import './App.css'; // Archivo de estilos CSS

function App() {
  const [filterText, setFilterText] = useState('');
  const [items, setItems] = useState([
    { id: 1, name: 'Harry Potter y la Piedra Filosofal' },
    { id: 2, name: 'Cars 3' },
    { id: 3, name: 'Toy Story 2' },
    { id: 4, name: 'Stuart Little' },
    { id: 5, name: 'Stuart Little 2' },
    { id: 6, name: 'Stuart Little 3' },
    { id: 7, name: 'Troya' },
    { id: 8, name: 'Aquaman' },
    { id: 9, name: 'Batman v Superman' },

    // Agrega más elementos según sea necesario
  ]);

  const handleFilterTextChange = (text) => {
    setFilterText(text);
  };

  return (
    <div className="App">
      <header className="App-header">
      <img src={img1} className="App-logo" alt="logo" /> {/* Mostrar la imagen */}
        <h1>Filtrado de Peliculas en Lista</h1>
        <SearchBox onFilterTextChange={handleFilterTextChange} />
        
      </header>
      <FilteredList items={items} filterText={filterText} />
    </div>
  );
}

export default App;
