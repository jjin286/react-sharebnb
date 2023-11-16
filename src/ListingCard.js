import React from 'react';
import { Link } from 'react-router-dom';

function ListingCard({ listing }) {
  return (
    <div className='ListingCard'>
      <Link to={`/listing/${listing.id}`}>
        <div>
          <img src={listing.image} alt={listing.title} width={200} />
          <p>{listing.title}</p>
          <p>{listing.city}</p>
          <p>{listing.price_per_day}</p>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
