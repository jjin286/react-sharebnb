function BookingCard({ booking }) {
  console.log("BookingCard booking", booking)
  const listingInfo = booking.Listing;
  const start = new Date(booking.check_in_date);
  const end = new Date(booking.check_out_date);
  const daysBooked = Math.abs(start.getTime() - end.getTime()) / (1000 * 3600 * 24);
  const total = daysBooked * booking.price;
  return (
    <div className="BookingCard">
       <img src={listingInfo.image} width={100}/>
       <p>Title: {listingInfo.title}</p>
       <p>Address: {listingInfo.address}, {listingInfo.city}, {listingInfo.state}, {listingInfo.zipcode}</p>
       <p>Days booked: {daysBooked}</p>
       <p>Total Cost: ${total} </p>
       <p>Check in: {booking.check_in_date}</p>
       <p>Check out: {booking.check_out_date}</p>
    </div>
  );
}

export default BookingCard;