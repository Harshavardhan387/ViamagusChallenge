import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import moment from "moment";
import "./DatePage.css";
import { DatePicker } from "rsuite";
import "rsuite/dist/rsuite.min.css";

function DatePage(props) {
  return (
    <div>
      <div className="main text-center mt-3">
        <div className="date">
          <h4>From date:</h4>
          {/* {props.startDatePicker} */}
          <DatePicker format="dd-mm-yyyy hh:mm" />
          <h4>To date:</h4>
          {/* {props.endDatePicker} */}
          <DatePicker format="dd-mm-yyyy hh:mm" />
          <p>{}</p>
        </div>
      </div>
    </div>
  );
}

export default DatePage;
