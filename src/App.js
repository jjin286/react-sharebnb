import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Nav from "./Nav";
import SharebnbApi from './api';
import { jwtDecode } from "jwt-decode";



function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));

  useEffect(
    /**decodes token and sets the user based off the username within it */
    function getUserFromToken() {
      if (token !== null) {
        SharebnbApi.token = token;
        localStorage.setItem("token", token);
        const userInToken = jwtDecode(token);
        try {
          getUser(userInToken.username);
        } catch (err) {
          setToken(null);
        }
      } else {
        SharebnbApi.token = null;
        localStorage.removeItem("token");
        setUser(null);
      }
    },
    [token]
  );

  async function login({ username, password }) {
    const token = await SharebnbApi.login(username, password);
    const userInToken = jwtDecode(token);
    //{username, is_host, iat}
    localStorage.setItem("token", token);
    SharebnbApi.token = token;
    getUser(userInToken.username);
    setToken(token);
  }

  async function getUser(username) {
    setUser(await SharebnbApi.getUser(username));
  }

  async function register(data) {
    const token = await SharebnbApi.register(data);
    const userInToken = jwtDecode(token);
    //{username, is_host, iat}
    localStorage.setItem("token", token);
    SharebnbApi.token = token;
    getUser(userInToken.username);
    setToken(token);
  }

  async function logout() {
    SharebnbApi.token = "";
    localStorage.removeItem("token");
    setUser(null);
    setToken(null);
  }

  async function book(listingId, check_in_date, check_out_date) {
    SharebnbApi.book( listingId, check_in_date, check_out_date );
  }

  if (token !== null && user === null) {
    return (
      <div className="App">
        <h1>Loading ...</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Nav user={user} logout={logout} />
        <RouteList login={login} register={register} user={user} book={book} />
      </BrowserRouter>
    </div>
  );
}

export default App;
