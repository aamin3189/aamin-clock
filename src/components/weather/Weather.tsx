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
import invertColor, { selectColor } from "../../services/color";

const MAX = 10;

const Weather = () => {
  const [weather, setWeather] = useState<IWeatherResponse>();
  const [pexelsImage, setImages] = useState<IPexelsPhoto>();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [width, setWidth] = useState(0);
  useEffect(() => {
    getTime();
    getData();
    setInterval(() => {
      getData();
    }, 1000 * 60 * 60);
  }, []);
  const getData = async () => {
    const data: IWeatherResponse = await getWeather();
    setWeather(data);
    let imgResponse: IPexelsResponse = await getPexelsImage(
      data.weather[0].main,
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
        // color: selectColor(pexelsImage?.avg_color ?? "#000000"),
        backgroundImage: `url(${pexelsImage?.src.landscape})`,
        // backgroundImage: `url(https://images.pexels.com/photos/11491207/pexels-photo-11491207.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200)`,
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
            background: "rgba(21, 19, 19, 0.66)",
            height: "100%",
            zIndex: 1,
          }}
        ></div>
        <hr
          className="seconds-hr"
          style={{
            width: `${width}%`,
            backgroundColor: invertColor(pexelsImage?.avg_color),
          }}
        />
        {/* style={{ color: pexelsImage?.avg_color, fontSize: 100 }} */}
        <h1>{time}</h1>
        <div className="weather-info">
          <label>
            {weather?.main.temp.toFixed(0)}
            <sup>&#176;</sup>
          </label>
          <label>{weather?.weather[0].description}</label>
          {weather?.sys && (
            <label>
              Sunrise: {moment.unix(weather?.sys.sunrise).format("hh:mm A")}{" "}
              Sunset: {moment.unix(weather?.sys.sunset).format("hh:mm A")}
            </label>
          )}
        </div>
        <div className="date-day">{date}</div>
      </section>
    </div>
  );
};

export default Weather;
