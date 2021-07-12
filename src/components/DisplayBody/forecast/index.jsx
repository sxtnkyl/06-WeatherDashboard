import React, { useContext } from "react";
import { WindowContext } from "../../../util/windowContext";
import DayCard from "./dayCard";
import * as S from "../../../styles/styles";

const Forecast = () => {
  const { local } = useContext(WindowContext);

  return (
    <S.ForecastContainer>
      {local.currentCityForecast
        ? local.currentCityForecast.map((day, i) => {
            return <DayCard data={day} key={i} />;
          })
        : "loading forecast data"}
    </S.ForecastContainer>
  );
};

export default Forecast;
