import React, { useEffect } from 'react';
import { useState } from 'react';
import SharebnbApi from './api';
import ListingCard from './ListingCard';
import SearchForm from './SearchForm';
import "./ListingsList.css";

const LOGO = "https://png.pngtree.com/png-vector/20230828/ourmid/pngtree-an-icon-of-a-cute-house-on-a-background-vector-png-image_6980704.png";

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
    <div className="ListingsList" style={{ display: "flex", flexWrap: "wrap" }}>
      <div className="header">
        <img className="logo"
          src={LOGO}
          alt="logo" />

        <div className='search'>
          <SearchForm search={getListings} />
        </div>
      </div>

      {listings.map(l => <ListingCard listing={l} />)}
    </div>
  );
}

export default ListingsList;

//TODO: THE fix was the header was messed up, didn't use header:{}. Mistake was just using authorization:""
