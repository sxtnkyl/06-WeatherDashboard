import React, { useContext } from "react";
import * as S from "../../styles/styles";
import { WindowContext } from "../../util/windowContext";
import SearchBar from "./searchBar";
import logo from "../../images/weatherLogo.png";
import { fetchSingleDay, fetchOneCall } from "../../api/weatherAPI";
import { makeForecastData } from "../../util/helperFuncs";

const Navbar = () => {
  const { local, setLocal } = useContext(WindowContext);

  const handleSubmit = async (city) => {
    //fetch the things
    //TODO: add error handling/loading hook
    let { data } = await fetchSingleDay(city);
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

  const updateSearchedCities = (city) => {
    let newCitiesArray = [...local.searchedCities];
    //handle searchedCity dups
    if (!local.searchedCities.includes(city)) newCitiesArray.push(city);
    return newCitiesArray;
  };

  const Searched = local.searchedCities.length ? (
    <S.FlexContainer style={{ flex: "0 0 100%" }}>
      {local.searchedCities.map((city) => (
        <S.BaseButton
          key={city}
          value={city}
          onClick={() => handleSubmit(city)}
        >
          {city}
        </S.BaseButton>
      ))}
    </S.FlexContainer>
  ) : null;

  return (
    <S.NavContainer className="nav-container">
      <S.IconContainer height="50px" width="auto">
        {local.currentCityData == null ? (
          <S.Icon src={logo} />
        ) : (
          <S.BaseHeader>{local.currentCityData.name}</S.BaseHeader>
        )}
      </S.IconContainer>
      <SearchBar />
      {Searched}
    </S.NavContainer>
  );
};

export default Navbar;
