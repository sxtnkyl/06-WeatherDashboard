import React, { useContext, useState, useEffect } from "react";
import { WindowContext } from "../../../util/windowContext";
import { fetchCity } from "../../../api/weatherAPI";

const SearchNav = () => {
  const { local, setLocal } = useContext(WindowContext);
  const [value, setValue] = useState("");

  //update local with search if new city
  // function checkLocalStorage(value) {
  //   let prevSearched = local.searchedCities;
  //   //do not update localStorage, fetchCity
  //   if (prevSearched.indexOf(value)) {
  //     fetchCity(value);
  //   } else {
  //     //update local (triggers update in app.jsx) and fetchCity
  //     fetchCity(value).then(res => {
  //       console.log(res)
  //       setLocal({currentCity = res, searchedCities = local.searchedCities.push(value)})
  //     })
  //   }
  // }

  const testFetch = (e) => {
    e.preventDefault();
    fetchCity("paris").then((res) => {
      console.log("im testing: ", res);
    });
  };

  return (
    <div>
      <h2>Search for a City</h2>
      <form></form>
      <input
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={testFetch}>Search City</button>
    </div>
  );
};

export default SearchNav;
