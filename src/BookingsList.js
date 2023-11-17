import BookingCard from "./BookingCard";
import "./BookingsList.css";

function BookingsList({ bookings }) {
  console.log("Bookings", bookings);
  return (
    <div className="BookingsList">
      <h1>Bookings</h1>
      <div className="BookingsList-card">
        {bookings.map(b => <BookingCard booking={b} />)}
      </div>
    </div>

  );
}

export default BookingsList;
