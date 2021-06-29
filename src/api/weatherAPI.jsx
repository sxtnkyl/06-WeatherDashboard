import axios from "axios";
export const testFetch = () => {
  const city = {
    coord: {
      lon: -122.08,
      lat: 37.39,
    },
    weather: [
      {
        id: 800,
        main: "Clear",
        description: "clear sky",
        icon: "01d",
      },
    ],
    base: "stations",
    main: {
      temp: 282.55,
      feels_like: 281.86,
      temp_min: 280.37,
      temp_max: 284.26,
      pressure: 1023,
      humidity: 100,
    },
    visibility: 16093,
    wind: {
      speed: 1.5,
      deg: 350,
    },
    clouds: {
      all: 1,
    },
    dt: 1560350645,
    sys: {
      type: 1,
      id: 5122,
      message: 0.0139,
      country: "US",
      sunrise: 1560343627,
      sunset: 1560396563,
    },
    timezone: -25200,
    id: 420006353,
    name: "Mountain View",
    cod: 200,
  };
  return city;
};
//movie/latest does not support query string > used now_playing instead
export const fetchCity = (city) => {
  return axios({
    url: `${process.env.WEATHER_BASE_DOMAIN}weather?q=${city}&appid=${process.env.WEATHER_API_KEY}`,
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
    url: `${process.env.WEATHER_BASE_DOMAIN}onecall?lat=${lat}&lon=${long}&exclude=hourly,daily&appid=${process.env.WEATHER_API_KEY}`,
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
