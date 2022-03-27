// import React from "react";
// import moment from "moment";

import { useEffect, useState } from "react";
import getWeather from "../../services/weather";
import { IWeatherResponse } from "../../interfaces/IWeatherResponse";
import {
  IPexelsPhoto,
  IPexelsResponse,
} from "../../interfaces/IPexelsResponse";
import getPexelsImage from "../../services/pexels";
import moment from "moment";
import "./weather.css";
import invertColor from "../../services/color";

const MAX = 10;

const Weather = () => {
  const [weather, setWeather] = useState<IWeatherResponse>();
  const [pexelsImage, setImages] = useState<IPexelsPhoto>();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [width, setWidth] = useState(0);
  useEffect(() => {
    getData();
    getTime();
  }, []);
  const getData = async () => {
    const data: IWeatherResponse = await getWeather();
    setWeather(data);
    let imgResponse: IPexelsResponse = await getPexelsImage(
      data.weather[0].description,
      10
    );
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
        backgroundImage: `url(${pexelsImage?.src.landscape})`,
      }}
      className="weatherContainer"
    >
      <hr className="seconds-hr" style={{ width: `${width}%` }} />
      {/* style={{ color: pexelsImage?.avg_color, fontSize: 100 }} */}
      <h1>{time}</h1>
      <div className="weather-info">
        <span>
          {weather?.main.temp.toFixed(0)}
          <sup>&#176;</sup>
        </span>
        <span>{weather?.weather[0].main}</span>
        <span>{weather?.name}</span>
      </div>
      <div className="date-day">{date}</div>
    </div>
  );
};

export default Weather;
