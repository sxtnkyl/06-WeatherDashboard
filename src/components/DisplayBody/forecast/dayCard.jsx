import React from "react";
import { iconSeverity } from "../../../util/helperFuncs";
import * as S from "../../../styles/styles";

const DayCard = ({ data }) => {
  let { date, icon, maxTemp, minTemp, windSpd, humidity, uv } = data;
  let imgStr = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let condition = iconSeverity(icon);

  return (
    <S.DayCard>
      <div>{date}</div>
      <S.IconContainer width="auto" border={condition}>
        <S.Icon src={imgStr} alt="weather icon" />
      </S.IconContainer>
      <div>Hi: {maxTemp}°F</div>
      <div>Low: {minTemp}°F</div>
      <div>Wind Speed: {windSpd}mph</div>
      <div>Humidity: {humidity}%</div>
      <div>UV Index: {uv}</div>
    </S.DayCard>
  );
};

export default DayCard;
