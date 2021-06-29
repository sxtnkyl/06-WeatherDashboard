import React, { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../../util/windowContext";
import { testFetch, fetchCity } from "../../../api/weatherAPI";

const SearchNav = () => {
  const { local, setLocal } = useContext(WindowContext);
  const [value, setValue] = useState("");
  useEffect(() => {
    console.log(value);
  }, [value]);

  //update local with search if new city
  function checkLocalStorage() {
    let prevSearched = local.searchedCities;
    //do not update localStorage, fetchCity
    if (prevSearched.indexOf(value) !== -1) {
      // fetchCity(value);
      console.log("already in localStorage");
    } else {
      //update local (triggers update in app.jsx) and fetchCity
      // fetchCity(value).then(res => {
      //   console.log(res)
      //   setLocal({currentCity = res, searchedCities = local.searchedCities.push(value)})
      // })
      let test = testFetch();
      console.log(test);
      setLocal({
        currentCity: test,
        searchedCities: local.searchedCities.push("test"),
      });
      localStorage.setItem("weatherDashboard", JSON.stringify(local));
    }
  }

  return (
    <div>
      <h2>Search for a City</h2>
      <form></form>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={checkLocalStorage}>Search City</button>
    </div>
  );
};

export default SearchNav;
