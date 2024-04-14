// import React from "react";
// import moment from "moment";

import { useEffect, useState } from "react";
import getWeather from "../../services/weather";
import { IWeatherResponse } from "../../interfaces/IWeatherResponse";
import { IPexelsPhoto, IPexelsResponse } from "../../interfaces/IPexelsResponse";
import getPexelsImage from "../../services/pexels";
import moment from "moment";
import "./landscape.css";
import invertColor, { selectColor } from "../../services/color";

const MAX = 10;

const Landscape = () => {
  const [weather, setWeather] = useState<IWeatherResponse>();
  const [pexelsImage, setImages] = useState<IPexelsPhoto>();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [width, setWidth] = useState(0);
  useEffect(() => {
    getTime();
    getData();
    getLandscape();
    setInterval(() => {
      getData();
    }, 1000 * 60 * 60);
  }, []);
  const getData = async () => {
    const data: IWeatherResponse = await getWeather();
    setWeather(data);
  };

  const getLandscape = async () => {
    let imgResponse: IPexelsResponse = await getPexelsImage("landscape", MAX);
    const index = Math.floor(Math.random() * MAX);
    setImages(imgResponse.photos[index]);
  };

  function getTime() {
    setInterval(() => {
      const timeX = moment().format("hh:mm");
      setTime(timeX);
      const dateX = moment().format("dddd, MMM DD");
      setDate(dateX);
      const sec: number = parseInt(moment().format("s"));
      setWidth((sec / 60) * 100);
    }, 1000);
  }

  return (
    <div
      style={{
        // color: selectColor(pexelsImage?.avg_color ?? "#000000"),
        backgroundImage: `url(${pexelsImage?.src.landscape})`,
        // backgroundImage: `url(https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200)`,
      }}
      className="weatherContainer"
    >
      <section>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            // background: "rgba(21, 19, 19, 0.66)",
            height: "100%",
            zIndex: 1,
          }}
        ></div>
        <hr
          className="seconds-hr"
          style={{
            width: `${width}%`,
            // backgroundColor: invertColor(pexelsImage?.avg_color),
          }}
        />
        <div className="clock-area">
          <h1>{time}</h1>
          <div className="weather-info wwpoo">
            <label>
              {weather?.main.temp.toFixed(0)}
              <sup>&#176;</sup>C # L:{weather?.main.temp_min.toFixed(0)}
              <sup>&#176;</sup># H:
              {weather?.main.temp_max.toFixed(0)}
              <sup>&#176;</sup># FL {weather?.main.feels_like.toFixed(0)}
              <sup>&#176;</sup>
            </label>
          </div>
          <div className="overcast">
            <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}.png`} alt="weather icon" />
            <label>
              {weather?.weather[0].description}, {weather?.name}
            </label>
          </div>
          <div className="date-day">{date}</div>
        </div>
      </section>
    </div>
  );
};

export default Landscape;
