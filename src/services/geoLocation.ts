import { iIP } from "../interfaces/iIP";

function getGeoLocationFromIP(): Promise<iIP> {
  return new Promise((resolve, reject) => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default getGeoLocationFromIP;
