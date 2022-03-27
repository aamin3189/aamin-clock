import useFetch from "use-http";
import Video from "../video/Video";
import "../video/video.css";
import moment from "moment";
import { useEffect, useState } from "react";

const Weather = () => {
  const options = {};
  const [time, setTime] = useState("");
  const {
    loading,
    error,
    data = null,
  } = useFetch(
    "https://api.openweathermap.org/data/2.5/weather?units=metric&lat=12.9178813&lon=77.604728&appid=8d7caa24c3aa6cd0fcd421ce6c4abcc4",
    options,
    []
  );

  function getTime() {
    const time = moment(new Date()).format("h:mm A");
    setTime(time);
  }

  useEffect(() => {
    setInterval(getTime, 1000);
  });

  return (
    <div className="weather-container">
      {error && "Error!"}
      {loading ? (
        "Loading..."
      ) : (
        <>
          <Video
            videoSrc={require(`../../assets/video/${data.weather[0].main.toLowerCase()}.mp4`)}
          />

          <div className="content">
            <img
              alt="type"
              src={require(`../../assets/images/${data.weather[0].main.toLowerCase()}.png`)}
            />
            <h1>{time}</h1>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
