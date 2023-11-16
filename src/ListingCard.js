import React from 'react';

function ListingCard({listing}) {
  return (
    <div className='ListingCard'>
      <img src={listing.image} alt={listing.title}/>
      <p>{listing.title}</p>
      <p>{listing.city}</p>
      <p>{listing.price_per_day}</p>
    </div>
  );
}

export default ListingCard;
