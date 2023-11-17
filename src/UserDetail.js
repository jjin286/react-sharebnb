import BookingsList from "./BookingsList";

function UserDetail({user}){

  console.log("user bookings", user.Bookings)
  return(
    <div className="UserDetail">
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
      <p>First name: {user.first_name}</p>
      <p>Last name: {user.last_name}</p>
      <p>Host: {user.is_host ? "Yes" : "No"}</p>
      <BookingsList bookings={user.Bookings} />
    </div>
  )
}

export default UserDetail;