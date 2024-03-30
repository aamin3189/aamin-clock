import React, { useEffect, useState } from "react";
import DateComp from "./DateComp";
import "./timonk.v2.css";

const TimonkV2 = () => {
  const [hourStyle, setHourStyle] = useState({});
  const [minStyle, setMinStyle] = useState({});
  const [secStyle, setSecStyle] = useState({});
  const [timeDate, setTime] = useState({});
  function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setTime(date);

    const hour = hours * 30 + minutes / 2;
    const minute = minutes * 6;
    const second = seconds * 6;

    setHourStyle({
      transform: `rotate(${hour}deg)`,
    });
    setMinStyle({
      transform: `rotate(${minute}deg)`,
    });
    setSecStyle({
      transform: `rotate(${second}deg)`,
    });
  }

  useEffect(() => {
    setInterval(clock, 1000);
  }, []);

  return (
    <div className="body-timonk">
      <div className="clock">
        <div className="wrap">
          <span className="hour" style={hourStyle}></span>
          <span className="minute" style={minStyle}></span>
          <span className="second" style={secStyle}></span>
          <span className="dot"></span>
        </div>
      </div>
      <DateComp timeDate={timeDate} />
      <span className="title">27 Cloudy</span>
    </div>
  );
};

export default TimonkV2;
