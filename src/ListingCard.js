import React from 'react';
import { Link } from 'react-router-dom';
import "./ListingCard.css";

function ListingCard({ listing }) {
  return (
    <div className='ListingCard'>
      <Link to={`/listing/${listing.id}`}>
        <div className="card">
          <img src={listing.image} alt={listing.title} width={200} />
          <div className="card-info">
            <p>{listing.title}</p>
            <p>{listing.city}</p>
            <p>{listing.price_per_day}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ListingCard;
