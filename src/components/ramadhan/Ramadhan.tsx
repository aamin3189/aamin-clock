import React, { useEffect, useState } from "react";
import getGeoLocationFromIP from "../../services/geoLocation";
import adhan from "adhan";
import { iIP } from "../../interfaces/iIP";
import moment from "moment";
import getWeather from "../../services/weather";
import { IWeatherResponse } from "../../interfaces/IWeatherResponse";
import "./ramadhan.scss";
import Time from "./Time";

type prayerState = {
  fajr: string;
  sunrise: string;
  dhuhr: string;
  asr: string;
  maghrib: string;
  isha: string;
};

const Ramadhan = () => {
  const [prayerTimes, setPrayerTimes] = useState<prayerState>();
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [islamicDate, setIslamicDate] = useState({ month: "", date: "" });
  const [weather, setWeather] = useState<IWeatherResponse>();
  const [ipInfo, setIpInfo] = useState<iIP>();

  async function setLocationData() {
    const data: iIP = await getGeoLocationFromIP();
    setIpInfo(data);
    getWeatherInfo(data.latitude, data.longitude);
    getPrayerTimes(data.latitude, data.longitude);
  }

  async function getWeatherInfo(lat: number, lon: number) {
    const weatherInfo: IWeatherResponse = await getWeather(lat, lon);
    setWeather(weatherInfo);
  }

  function getPrayerTimes(latitude: number, longitude: number) {
    let coordinates = new adhan.Coordinates(latitude, longitude);
    let date = new Date();
    let params = adhan.CalculationMethod.MuslimWorldLeague();
    params.madhab = adhan.Madhab.Hanafi;
    const pt = new adhan.PrayerTimes(coordinates, date, params);
    setPrayerTimes({
      fajr: moment(pt.fajr).format("hh:mm A"),
      sunrise: moment(pt.sunrise).format("hh:mm A"),
      dhuhr: moment(pt.dhuhr).format("hh:mm A"),
      asr: moment(pt.asr).format("hh:mm A"),
      maghrib: moment(pt.maghrib).format("hh:mm A"),
      isha: moment(pt.isha).format("hh:mm A"),
    });
    console.log(pt);
  }

  function getIslamicDate() {
    let myFormat = "en-u-ca-islamic-umalqura-nu-latn"; // use islamic-umalqura calendar (most modern)
    let myDate = new Date(Date.now());
    let date = new Intl.DateTimeFormat(myFormat, { dateStyle: "long" }).format(myDate);

    const returnable = date.split(" ");
    return {
      month: returnable[0],
      date: returnable[1].split(",")[0],
    };
  }

  function onMinuteChange() {
    setInterval(() => {
      setTime(moment().format("hh:mm"));
      setDate(moment().format("dddd, MMM DD"));
      setIslamicDate(getIslamicDate());
    }, 1000);
  }

  function callInHour() {
    setInterval(() => {
      if (ipInfo) {
        getPrayerTimes(ipInfo.latitude, ipInfo.longitude);
        getWeatherInfo(ipInfo.latitude, ipInfo.longitude);
      }
    }, 1000 * 60 * 60);
  }

  useEffect(() => {
    onMinuteChange();
    setLocationData();
    callInHour();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="ramadhan">
      <div className="time">
        <h1>{time}</h1>
        <span className="date">{date}</span>
        <span className="weather-info">
          {weather?.weather[0].main} {weather?.main.temp.toFixed(0)}°C
        </span>
        <span className="place">{ipInfo?.city}</span>
      </div>
      <div className="salah-times">
        <div className="islamic-month">
          <span>{islamicDate.date}</span>
          <span>{islamicDate.month}</span>
        </div>
        {prayerTimes && (
          <section>
            <div className="prayer-times">
              <Time label="SEHERI" time={prayerTimes.fajr} />
              <Time label="IFTAR" time={prayerTimes.maghrib} />
            </div>
            <div className="prayer-times">
              <Time label="FAJR" time={prayerTimes.fajr} />
              <Time label="FAJR ENDS" time={prayerTimes.sunrise} />
            </div>
            <div className="prayer-times">
              <Time label="DUHR" time="01:15 PM" />
              <Time label="ASR" time="05:15 PM" />
            </div>
            <div className="prayer-times">
              <Time label="MAGHRIB" time={prayerTimes.maghrib} />
              <Time label="ESHA" time="08:30 PM" />
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default Ramadhan;
