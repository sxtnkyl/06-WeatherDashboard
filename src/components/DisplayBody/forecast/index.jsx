import React, { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../../util/windowContext";
import DayCard from "./dayCard";

const Forecast = () => {
  const { local, setLocal } = useContext(WindowContext);

  return (
    <div style={{ border: "1px solid black" }}>
      {local.currentCityForecast
        ? local.currentCityForecast.map((day, i) => {
            return <DayCard data={day} key={i} />;
          })
        : "loading forecast data"}
    </div>
  );
};

export default Forecast;
