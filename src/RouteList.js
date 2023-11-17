import React from 'react';
import { Routes, Route } from "react-router-dom";
import ListingsList from "./ListingsList";
import LoginForm from "./auth/LoginForm";
import RegisterForm from "./auth/RegisterForm";
import AddListingForm from "./AddListingForm";
import ListingDetail from './ListingDetails';


function RouteList({ login, register, user, book }) {

  function loggedIn() {
    return (
      <>
        <Route path="/listing" element={<ListingsList />} />
        <Route path="/listing/:id" element={<ListingDetail book={book} />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/register" element={<RegisterForm register={register} />} />
        {user.is_host && <Route path="/listing/add" element={<AddListingForm />} />}
      </>
    );
  }

  function loggedOut() {
    return (
      <>
        <Route path="/listing" element={<ListingsList />} />
        <Route path="/listing/:id" element={<ListingDetail book={book} />} />
        <Route path="/login" element={<LoginForm login={login} />} />
        <Route path="/register" element={<RegisterForm register={register} />} />
      </>
    );
  }

  return (
    <div>
      <Routes>
        {user !== null
          ? loggedIn()
          : loggedOut()
        }
        <Route path="*" element={<ListingsList />} />
      </Routes>
    </div>
  );
}

export default RouteList;
