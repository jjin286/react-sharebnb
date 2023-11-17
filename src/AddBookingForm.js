import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { useParams } from "react-router-dom";

function AddBookingForm({ book }) {

  const { id } = useParams();

  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);
  console.log("calendar state", typeof state[0].startDate);

  function handleSubmit(evt) {
    evt.preventDefault();
    book({ listingId: id, check_in_date: state[0].startDate, check_out_date: state[0].endDate });
  }

  return (
    <div>
      <DateRange
        editableDateInputs={true}
        onChange={item => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
      <button onClick={handleSubmit}>Book</button>
    </div>
  );
}

export default AddBookingForm;
