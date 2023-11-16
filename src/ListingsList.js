import React, { useEffect } from 'react';
import { useState } from 'react';
import SharebnbApi from './api';
import ListingCard from './ListingCard';
import SearchForm from './SearchForm';

function ListingsList() {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    async function getListings(){
      setListings(await SharebnbApi.getListings());
    }
    getListings();
  }, []);

  async function getListings(searchTerm) {
    setListings(await SharebnbApi.getListings({ search: searchTerm }));
  }

  return (
    <div className="ListingsList" style={{display: "flex", flexWrap:"wrap"}}>
      <SearchForm search={getListings}/>
      {listings.map(l => <ListingCard listing={l} />)}
    </div>
  );
}

export default ListingsList;

//TODO: THE fix was the header was messed up, didn't use header:{}. Mistake was just using authorization:""