import "./BookingCard.css";

function BookingCard({ booking }) {
  console.log("BookingCard booking", booking);
  const listingInfo = booking.Listing;
  const start = new Date(booking.check_in_date);
  const end = new Date(booking.check_out_date);
  const daysBooked = Math.abs(start.getTime() - end.getTime()) / (1000 * 3600 * 24);
  const total = daysBooked * booking.price;
  return (
    <div className="BookingCard">
      <img src={listingInfo.image} width={100} />
      <p><b>Title:</b> {listingInfo.title}</p>
      <p><b>Address: </b>{listingInfo.address}, {listingInfo.city}, {listingInfo.state}, {listingInfo.zipcode}</p>
      <p><b>Days booked: </b> {daysBooked}</p>
      <p><b>Total Cost:</b>${total} </p>
      <p><b>Check in: </b>{booking.check_in_date}</p>
      <p><b>Check out: </b>{booking.check_out_date}</p>
    </div>
  );
}

export default BookingCard;
