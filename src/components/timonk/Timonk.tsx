import React, { useEffect, useState } from "react";
import "./timonk.css";

const Timonk = () => {
  const [hourStyle, setHourStyle] = useState({});
  const [minStyle, setMinStyle] = useState({});
  const [secStyle, setSecStyle] = useState({});
  function clock() {
    const date = new Date();

    const hours = ((date.getHours() + 11) % 12) + 1;
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const hour = hours * 30;
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
    </div>
  );
};

export default Timonk;
