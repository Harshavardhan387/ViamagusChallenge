import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import moment from "moment";
import "./DatePage.css";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function DatePage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());
  var days = Math.floor((endDate - startDate) / (1000 * 60 * 60 * 24));

  return (
    <div>
      <div className="main text-center mt-3">
        <div className="date">
          <h4>From date:</h4>
          {/* {props.startDatePicker} */}
          <DatePicker
            format="dd-MM-yyyy hh:mm"
            id="startDate"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <h4>To date:</h4>
          {/* {props.endDatePicker} */}
          <DatePicker
            format="dd-MM-yyyy hh:mm"
            id="endDate"
            selected={endDate}
            onChange={(date) => setendDate(date)}
          />
          <h4>Result in days:{days}</h4>
        </div>
      </div>
    </div>
  );
}

export default DatePage;
