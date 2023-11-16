import './App.css';
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Nav from "./Nav";
import SharebnbApi from './api';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RouteList />
      </BrowserRouter>
    </div>
  );
}

export default App;
