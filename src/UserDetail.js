import BookingsList from "./BookingsList";
import "./UserDetail.css";

function UserDetail({ user }) {

  console.log("user bookings", user.Bookings);
  return (
    <div className="UserDetail">
      <div className="UserCard">
        <h1>{user.username}</h1>
        <p>Email: {user.email}</p>
        <p>First name: {user.first_name}</p>
        <p>Last name: {user.last_name}</p>
        <p>Host: {user.is_host ? "Yes" : "No"}</p>
      </div>
      <div className="UserDetail-list">
        <BookingsList bookings={user.Bookings} />
      </div>
    </div>
  );
}

export default UserDetail;
