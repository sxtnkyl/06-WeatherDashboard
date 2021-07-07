import React from "react";
import { useState, useEffect, useMemo } from "react";
import NavBar from "../Navbar/index";
import DisplayBody from "../DisplayBody";
import { WindowContext } from "../../util/windowContext";

const App = () => {
  const [local, setLocal] = useState({
    searchedCities: [],
    currentCity: null,
    currentCityData: null,
    currentCityForecast: null,
  });

  //updated searched cities from localStorage on load
  useEffect(() => {
    let prevSearched = JSON.parse(localStorage.getItem("prevCities"));
    if (prevSearched !== null)
      setLocal({
        ...local,
        searchedCities: [...prevSearched],
      });
  }, []);

  //TODO: reduce rerenders when prev city is searched > updateCities in searchBar
  useEffect(() => {
    localStorage.setItem("prevCities", JSON.stringify(local.searchedCities));
  }, [local.searchedCities]);

  //memoize ctx
  const value = useMemo(() => ({ local, setLocal }), [local, setLocal]);

  return (
    <WindowContext.Provider value={value}>
      <NavBar />
      {local.currentCity && <DisplayBody />}
    </WindowContext.Provider>
  );
};

export default App;
