import React from 'react';
import { Routes, Route } from "react-router-dom";
import ListingsList from "./ListingsList";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import AddListingForm from "./AddListingForm";


function RouteList() {
  return (
    <div>
      <Routes>
        <Route path="/listing" element={<ListingsList />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/listing/add" element={<AddListingForm />} />
        <Route path="*" element={<ListingsList />} />
      </Routes>
    </div>
  );
}

export default RouteList;
