import React, { useState } from "react";
import dateFns from "date-fns";
import Header from './Header'
import "./calendar.css";

const Calendar = props => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="calendar">
      <Header />
      {/* <div>{daysOfWeek()}</div> */}
      {/* <div>{cells()}</div> */}
    </div>
  );
};

export default Calendar;
