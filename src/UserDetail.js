import BookingsList from "./BookingsList";
import "./UserDetail.css";

function UserDetail({ user }) {

  console.log("user bookings", user.Bookings);
  return (
    <div className="UserDetail">
      <div className="UserCard">
        <h1>{user.username}</h1>
        <p><b>Email:</b> {user.email}</p>
        <p><b>First name: </b>{user.first_name}</p>
        <p><b>Last name: </b>{user.last_name}</p>
        <p><b>Host: </b>{user.is_host ? "Yes" : "No"}</p>
      </div>
      <div className="UserDetail-list">
        <BookingsList bookings={user.Bookings} />
      </div>
    </div>
  );
}

export default UserDetail;
