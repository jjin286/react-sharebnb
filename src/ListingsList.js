import React, { useEffect } from 'react';
import { useState } from 'react';
import SharebnbApi from './api';
import ListingCard from './ListingCard';
import SearchForm from './SearchForm';
import "./ListingsList.css";

const LOGO = "https://static.vecteezy.com/system/resources/previews/005/726/845/original/wood-green-fence-yard-logo-symbol-icon-illustration-graphic-design-vector.jpg";

function ListingsList() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function getListings() {
      setListings(await SharebnbApi.getListings());
    }
    getListings();
  }, []);

  async function getListings(searchTerm) {
    setListings(await SharebnbApi.getListings({ search: searchTerm }));
  }


  if (!listings) return <h1>Loading ...</h1>;

  return (
    // style={{ display: "flex", flexWrap: "wrap" }}
    <div className="ListingsList" >
      <div className="header">
        <img className="logo"
          src={LOGO}
          alt="logo" />
        <h1>ShareBnB</h1>

        <div className='search'>
          <SearchForm search={getListings} />
        </div>
      </div>

      <div className="card-section">
        {listings.map(l => <ListingCard listing={l} />)}
      </div>
    </div>
  );
}

export default ListingsList;

//TODO: THE fix was the header was messed up, didn't use header:{}. Mistake was just using authorization:""
