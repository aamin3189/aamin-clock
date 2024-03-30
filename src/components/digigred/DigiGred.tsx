import React, { useEffect, useState } from "react";
import moment from "moment";
import "./digi.css";

const DigiGred = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  }, []);

  return (
    <div className="digi-body">
      <div className="clock-container">
        <div className="clock-col">
          <p className="clock-day clock-timer">{moment(time).format("dd")}</p>
          <p className="clock-label">day</p>
        </div>
        <div className="clock-col">
          <p className="clock-hours clock-timer">{moment(time).format("HH")}</p>
          <p className="clock-label">Hour</p>
        </div>
        <div className="clock-col">
          <p className="clock-minutes clock-timer">{moment(time).format("mm")}</p>
          <p className="clock-label">Minutes</p>
        </div>
        <div className="clock-col">
          <p className="clock-seconds clock-timer">{moment(time).format("ss")}</p>
          <p className="clock-label">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default DigiGred;
