import React, { useEffect, useState } from "react";
import "./clock.css";
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const scale = (
  num: number,
  in_min: number,
  in_max: number,
  out_min: number,
  out_max: number
) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const Clock = () => {
  const [hourStyle, setHourStyle] = useState({});
  const [minStyle, setMinStyle] = useState({});
  const [secStyle, setSecStyle] = useState({});
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");

  useEffect(() => {
    setInterval(setTime, 1000);
  }, []);

  function setTime() {
    const time = new Date();
    const month = time.getMonth();
    const day = time.getDay();
    const date = time.getDate();
    const hours = time.getHours();
    const hoursForClock = hours >= 13 ? hours % 12 : hours;
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    setHourStyle({
      transform: `translate(-50%, -100%) rotate(${scale(
        hoursForClock,
        0,
        12,
        0,
        360
      )}deg)`,
    });

    setMinStyle({
      transform: `translate(-50%, -100%) rotate(${scale(
        minutes,
        0,
        60,
        0,
        360
      )}deg)`,
    });

    setSecStyle({
      transform: `translate(-50%, -100%) rotate(${scale(
        seconds,
        0,
        60,
        0,
        360
      )}deg)`,
    });

    setTimeStr(
      `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    );
    setDateStr(`${days[day]}, ${months[month]} ${date}`);
  }

  return (
    <div>
      <div className="clock-container">
        <div className="clock" style={{ marginRight: 20 }}>
          <div style={hourStyle} className="needle hour"></div>
          <div style={minStyle} className="needle minute"></div>
          <div style={secStyle} className="needle second"></div>
          <div className="center-point"></div>
        </div>

        <div>
          <div className="time">{timeStr}</div>
          <div className="date">{dateStr}</div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
