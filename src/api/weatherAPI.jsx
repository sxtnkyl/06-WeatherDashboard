import axios from "axios";

//movie/latest does not support query string > used now_playing instead
export const fetchCity = (city) => {
  console.log(process.env.REACT_APP_WEATHER_BASE_DOMAIN);
  return axios({
    url: `${process.env.REACT_APP_WEATHER_BASE_DOMAIN}weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    type: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};

export const fetchUV = (lat, long) => {
  return axios({
    url: `${process.env.REACT_APP_WEATHER_BASE_DOMAIN}onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${process.env.REACT_APP_WEATHER_API_KEY}`,
    type: "GET",
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });
};
