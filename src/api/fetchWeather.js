import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const APPID = "47dd59d0cf329b11830b7b08a7a48dd3";

export const fetchWeather = async (q) => {
  const response = await axios.get(URL, {
    params: {
      q,
      units: "metric",
      APPID,
    },
  });
  const { data } = response;
  return data;
};
