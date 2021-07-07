import React, { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../../util/windowContext";
import { iconSeverity } from "../../../util/helperFuncs";

const SingleDay = () => {
  const { local, setLocal } = useContext(WindowContext);
  let { date, icon, temp, windSpd, humidity, uv } = local.currentCityData;
  let imgStr = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let condition = iconSeverity(icon);

  return (
    <div style={{ border: "1px solid purple" }}>
      <div>{date}</div>
      <img src={imgStr} style={{ border: `1px solid ${condition}` }} />
      <div>Current Temp: {temp}°F</div>
      <div>Wind Speed: {windSpd}mph</div>
      <div>Humidity: {humidity}%</div>
      <div>UV Index: {uv}</div>
    </div>
  );
};

export default SingleDay;
