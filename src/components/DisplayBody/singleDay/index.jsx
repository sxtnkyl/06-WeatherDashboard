import React, { useContext } from "react";
import { WindowContext } from "../../../util/windowContext";
import { iconSeverity } from "../../../util/helperFuncs";
import * as S from "../../../styles/styles";

const SingleDay = () => {
  const { local } = useContext(WindowContext);
  let { date, icon, temp, windSpd, humidity, uv } = local.currentCityData;
  let imgStr = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  let condition = iconSeverity(icon);

  return (
    <S.SingleDayContainer>
      <S.SingleDayCard>
        <div>
          <div>{date}</div>
          <S.IconContainer width="auto" border={condition}>
            <S.Icon src={imgStr} alt="weather icon" />
          </S.IconContainer>
        </div>
        <div>
          <div>Current Temp: {temp}°F</div>
          <div>Wind Speed: {windSpd}mph</div>
          <div>Humidity: {humidity}%</div>
          <div>UV Index: {uv}</div>
        </div>
      </S.SingleDayCard>
    </S.SingleDayContainer>
  );
};

export default SingleDay;
