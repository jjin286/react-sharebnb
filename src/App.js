import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Nav from "./Nav";
import SharebnbApi from './api';
import { jwtDecode } from "jwt-decode";



function App() {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  async function login({username, password}){
    const token = await SharebnbApi.login(username, password);
    const userInToken = jwtDecode(token);
    //{username, is_host, iat}
    SharebnbApi.token = token;
    getUser(userInToken.username);
    setToken(token);
  }

  async function getUser(username){
    setUser(await SharebnbApi.getUser(username));
  }

  async function register(data){
    const token = await SharebnbApi.register(data);
    const userInToken = jwtDecode(token);
    //{username, is_host, iat}
    SharebnbApi.token = token;
    getUser(userInToken.username);
    setToken(token);
  }

  async function logout(){
    SharebnbApi.token = "";
    setUser(null);
    setToken(null);
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
        <Nav user={user} logout={logout}/>
        <RouteList login={login} register={register} user={user}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
