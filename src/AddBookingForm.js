import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';
import { useState } from "react";
import { useParams } from "react-router-dom";
import { ms } from 'date-fns/locale';

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

    book( id, state[0].startDate, state[0].endDate );
    setState(
      [
        {
          startDate: new Date(),
          endDate: new Date(),
          key: 'selection'
        }
      ]
    );
    setMsg(`Booking confirmed for ${state[0].startDate} to ${state[0].endDate}`)
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
      {msg !== null && <h4>{msg}</h4>}
    </div>
  );
}

export default AddBookingForm;
