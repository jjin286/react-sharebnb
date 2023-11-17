import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ms } from 'date-fns/locale';
import Button from '@mui/material/Button';
import "./AddBookingForm.css";

function AddBookingForm({ book }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [msg, setMsg] = useState(null);
  const { id } = useParams();

  function handleSubmit(evt) {
    evt.preventDefault();

    book(id, state[0].startDate, state[0].endDate);
    setState(
      [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]
    );
    setMsg(`Booking confirmed for ${state[0].startDate.toLocaleDateString()} to ${state[0].endDate.toLocaleDateString()}`);
  }

  return (
    <div className="AddBookingForm">
      <h2>Pick your stay dates </h2>
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      {/* <div className="AddBookingForm-button"> */}
      <Button onClick={handleSubmit}>Book</Button>
      {/* </div> */}
      {msg !== null && <h4>{msg}</h4>}
    </div>
  );
}

export default AddBookingForm;
