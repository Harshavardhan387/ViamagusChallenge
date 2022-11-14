import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import moment from "moment";
import "./DatePage.css";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function DatePage() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  // Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));
  // var days = (document.getElementById("inputDuration").value = Math.floor(
  //   (endDate - startDate) / (1000 * 60 * 60 * 24)
  // ));
  // const [duration, setduration] = useState(0);
  // var duration = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

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
            }}
          />
          <h5 className="mt-4">
            Duration:
            <input
              type="number"
              id="inputDuration"
              onChange={(days) => {
                const date = new Date();
                date.setDate(startDate.getDate() + parseInt(days.target.value));
                setEndDate(date);
                // console.log(startDate);
                // console.log(endDate);
              }}
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
