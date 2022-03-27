interface IGeo {
  lat: number;
  lon: number;
}

interface IWeather {
  randomId: string;
  units: string | "metric" | "imperial";
  geo: IGeo;
}

interface IPexels {
  randomId: string;
}

export interface IConfig {
  weather: IWeather;
  pexels: IPexels;
}
