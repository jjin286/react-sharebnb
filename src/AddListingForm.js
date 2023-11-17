import React from 'react';
import { useState } from 'react';
import SharebnbApi from './api';
import { useNavigate } from 'react-router-dom';
import { FormControl } from '@mui/base/FormControl';

import Button from '@mui/material/Button';
import "./AddListingForm.css";

function AddListingForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    price_per_day: ""
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();

  function handleChange(evt) {
    const { name, value } = evt.target;

    setFormData(curr => {
      return { ...curr, [name]: value };
    });
  }

  function handleFileChange(evt) {
    setImage(evt.target.files[0]);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    // FIXME: Hard coded host_id
    const data = { ...formData, image };
    await SharebnbApi.addListing(data);
    navigate("/listing");
  }


  return (
    <div className='AddListingForm' >
      <h1>Add your space</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-secondary bg-opacity-75 p-3 rounded"
      >
        <FormControl>
          <div className="mb-3">

            <label htmlFor="title">Title</label>
            <input
              id="title"
              className="form-control  "
              name="title"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">

            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              className="form-control  "
              name="description"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              className="form-control  "
              name="address"
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="city">City</label>
            <input
              id="city"
              className="form-control  "
              name="city"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="state">State</label>
            <input
              id="state"
              className="form-control  "
              name="state"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="zipcode">Zipcode</label>
            <input
              id="zipcode"
              className="form-control  "
              name="zipcode"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price_per_day">Price per day</label>
            <input
              id="price_per_day"
              type="number"
              className="form-control  "
              name="price_per_day"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="image">Image</label>
            <input
              id="image"
              type="file"
              className="form-control  "
              name="image"
              onChange={handleFileChange}
            />
          </div>

          <Button className="btn" type="submit">
            Submit
          </Button>

        </FormControl>

      </form>
    </div >
  );
}

export default AddListingForm;
