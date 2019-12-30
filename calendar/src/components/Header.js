import React, { useState } from "react";
import { format, addMonths, subMonths } from "date-fns";

const Header = props => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dateFormat = "MMMM yyyy";

  const nextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };
  const prevMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };
  return (
    <div className="header row flex-middle">
      <div className="column col-start">
        <div className="icon" onClick={prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="column col-center">
        <span>{format(currentDate, dateFormat)}</span>
      </div>
      <div className="column col-end">
        <div className="icon" onClick={nextMonth}>
          chevron_right
        </div>
      </div>
    </div>
  );
};

export default Header;
