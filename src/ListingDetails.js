import { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import SharebnbApi from "./api";
import AddBookingForm from "./AddBookingForm";

function ListingDetail() {
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
      <h1>{listing.title}</h1>
      <img src={listing.image} alt={listing.title} width={200} />
      <p>Description: {listing.description}</p>
      <p>Address: {listing.address}</p>
      <p>City: {listing.city}</p>
      <p>State: {listing.state}</p>
      <p>Zipcode: {listing.zipcode}</p>
      <p>Price per day: ${listing.price_per_day}</p>
      <AddBookingForm />
    </div>
  );
}

export default ListingDetail;
