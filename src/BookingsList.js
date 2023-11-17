import BookingCard from "./BookingCard";

function BookingsList({ bookings }) {
  console.log("Bookings", bookings)
  return (
    <div className="BookingsList">
      <h1>Bookings</h1>
      {bookings.map(b => <BookingCard booking={b} />)}
    </div>

  );
}

export default BookingsList;