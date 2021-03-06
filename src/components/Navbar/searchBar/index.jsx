import React, { useContext, useState } from "react";
import { WindowContext } from "../../../util/windowContext";
import { fetchSingleDay, fetchOneCall } from "../../../api/weatherAPI";
import { makeForecastData } from "../../../util/helperFuncs";
import * as S from "../../../styles/styles";

const SearchBar = () => {
  //TODO: add lazy initial state for localStorage prev searched list
  const { local, setLocal } = useContext(WindowContext);
  const [value, setValue] = useState("");

  const updateSearchedCities = (city) => {
    let newCitiesArray = [...local.searchedCities];
    //handle searchedCity dups
    if (!local.searchedCities.includes(city)) newCitiesArray.push(city);
    return newCitiesArray;
  };

  const handleSubmit = async () => {
    //fetch the things
    //TODO: add error handling/loading hook
    let { data } = await fetchSingleDay(value);
    let oneCall = await fetchOneCall(data.coord.lat, data.coord.lon);
    //org the things
    let forecast = makeForecastData(data.name, oneCall.data);
    //update ctx
    setLocal({
      ...local,
      searchedCities: updateSearchedCities(data.name),
      currentCity: data.name,
      currentCityData: forecast.current,
      currentCityForecast: forecast.forecast,
    });
  };

  return (
    <div>
      <S.BaseInput
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        placeholder="Search for a City"
        list="hist"
      />
      <S.BaseButton onClick={value.length > 0 && handleSubmit}>
        Search City
      </S.BaseButton>
    </div>
  );
};

export default SearchBar;
