import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import "./SearchForm.css";

function SearchForm({ search }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleChange(evt) {
    const searchTerm = evt.target.value;
    setSearchTerm(searchTerm);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    search(searchTerm.trim());
  }

  return (
    <div className='SearchForm'>
      <form onSubmit={handleSubmit}>
        <div className="search">
          <input
            className=""
            name="search"
            onChange={handleChange}
            value={searchTerm}
          />
          {/* <button type="submit"> */}
          <SearchIcon type="submit" />
          {/* </button> */}
        </div>
      </form>
    </div>
  );
}

export default SearchForm;
