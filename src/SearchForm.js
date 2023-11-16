import React, { useState } from 'react';

function SearchForm({search}) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(evt){
    const searchTerm = evt.target.value;
    setSearchTerm(searchTerm);
  }

  function handleSubmit(evt){
    evt.preventDefault();
    search(searchTerm.trim());
  }

  return (
    <div className='SearchForm'>
      <form onSubmit={handleSubmit}>
        <input
          className=""
          name="search"
          onChange={handleChange}
          value={searchTerm}
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchForm;
