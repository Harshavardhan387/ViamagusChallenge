import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import moment from "moment";
import "./DatePage.css";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function DatePage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState();

  function calculateEndDate(date) {
    const newDate = new Date(date);
    var duration = document.getElementById("inputDuration");
    if (date) {
      if (parseInt(duration.value)) {
        for (var i = 0; i < parseInt(duration.value); ) {
          if (newDate.getDay() !== 0 && newDate.getDay() !== 6) {
            i++;
          }
          newDate.setDate(newDate.getDate() + 1);
        }
        setEndDate(newDate);
      } else {
        setEndDate();
      }
    } else {
      setEndDate();
      duration.value = 0;
    }
  }

  return (
    <div>
      <div className="main text-center mt-3">
        <div className="date">
          <h4>From date:</h4>
          {/* {props.startDatePicker} */}
          <DatePicker
            format="dd-MM-yyyy hh:mm"
            id="startDate"
            value={startDate}
            onChange={(date) => {
              setStartDate(date);
              calculateEndDate(date);
            }}
          />
          <h5 className="mt-4">
            Duration:
            <input
              className="text-center"
              type="number"
              id="inputDuration"
              onChange={() => calculateEndDate(startDate)}
            />
          </h5>
          <h4 className="mt-3">To date:</h4>
          {/* {props.endDatePicker} */}
          <DatePicker
            format="dd-MM-yyyy hh:mm"
            id="endDate"
            value={endDate}
            onChange={(date) => {
              setEndDate(date);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default DatePage;

// function calculateEndDate(date) {
//   const newDate = new Date();
//   var duration = document.getElementById("inputDuration");
//   if (date) {

//     if (parseInt(duration.value)) {
//       newDate.setDate(date.getDate() + parseInt(duration.value));
//       setEndDate(newDate);
//     } else {
//       setEndDate();
//     }
//   } else {
//     setEndDate();
//     duration.value = 0;
//   }
// }
