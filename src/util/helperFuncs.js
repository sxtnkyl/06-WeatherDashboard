//make forecast data
export const makeForecastData = (city, forecastObj) => {
  let returnData = {
    current: null,
    forecast: null,
  };
  //returns data.daily[arr of 8]
  //use index 1-5
  let forecastArr = [];
  let singleDayForecast = {
    name: city,
    date: "get moment",
    icon: null,
    temp: null,
    maxTemp: null,
    minTemp: null,
    windSpd: null,
    humidity: null,
    uv: null,
  };

  //make current day
  let currentDay = { ...singleDayForecast };
  currentDay.date = makeDt(forecastObj.current.dt);
  currentDay.icon = forecastObj.current.weather[0].icon;
  currentDay.temp = forecastObj.current.temp;
  currentDay.windSpd = forecastObj.current.wind_speed;
  currentDay.humidity = forecastObj.current.humidity;
  currentDay.uv = forecastObj.current.uvi;
  returnData.current = currentDay;
  //make forecast data for each day, add to forecastArr
  for (let i = 1; i < 6; i++) {
    let info = forecastObj.daily[i];
    let newForecast = { ...singleDayForecast };
    newForecast.date = makeDt(info.dt);
    newForecast.icon = info.weather[0].icon;
    newForecast.maxTemp = info.temp.max;
    newForecast.minTemp = info.temp.min;
    newForecast.windSpd = info.wind_speed;
    newForecast.humidity = info.humidity;
    newForecast.uv = info.uvi;
    forecastArr.push(newForecast);
  }
  returnData.forecast = forecastArr;

  return returnData;
};

export const makeDt = (dt) => {
  var formattedTime = new Date(dt * 1000).toLocaleDateString("en-US");
  return formattedTime;
};

export const iconSeverity = (code) => {
  let moderate = ["09d"];
  let severe = ["50d", "13d", "10d", "11d"];
  return severe.includes(code)
    ? "red"
    : moderate.includes(code)
    ? "yellow"
    : "green";
};
