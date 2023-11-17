import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import SharebnbApi from "./api";
import AddBookingForm from "./AddBookingForm";
import "./ListingDetails.css";

function ListingDetail({ book }) {
  const [listing, setListing] = useState("");
  const { id } = useParams();

  useEffect(() => {
    async function getListing() {
      setListing(await SharebnbApi.getListing(id));
    }
    getListing();
  }, []);

  if (listing === "") return <h1>Loading ...</h1>;
  if (listing === null) return <Navigate to={"/listing"} />;
  return (
    <div className="ListingDetail">
      <div className="ListingCard">
        <h1>{listing.title}</h1>
        <img src={listing.image} alt={listing.title} width={400} />
        <p><b>Description:</b> {listing.description}</p>
        <p><b>Address:</b> {listing.address}</p>
        <p><b>City:</b> {listing.city}</p>
        <p><b>State:</b> {listing.state}</p>
        <p><b>Zipcode:</b> {listing.zipcode}</p>
        <p><b>Price per day:</b> ${listing.price_per_day}</p>
      </div>
      <div className="BookingFormContainer">
        <AddBookingForm book={book} />
      </div>
    </div>
  );
}

export default ListingDetail;
