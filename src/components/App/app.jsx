import React from "react";
import { useState, useContext, useEffect, useMemo } from "react";
import NavBar from "../Navbar/index";
import DisplayBody from "../DisplayBody";
import { WindowContext } from "../../util/windowContext";

const App = () => {
  const [local, setLocal] = useState({
    searchedCities: [],
    currentCity: null,
  });

  //initial load of prev search cities
  useEffect(() => {
    let prevSearches = JSON.parse(localStorage.getItem("weatherDashboard"));
    function checkForLocal() {
      if (prevSearches) {
        setLocal(prevSearches);
      } else {
        localStorage.setItem(
          "weatherDashboard",
          JSON.stringify({
            searchedCities: [],
            currentCity: null,
          })
        );
      }
    }
    checkForLocal();
    console.log(local);
  }, []);

  // const fetchLatest = () => {
  //   setLoading(true);
  //   fetchLatestMovies().then((res) => {
  //     setLoading(false);
  //     if (res.status !== 200) {
  //       //TODO: add conditional retry
  //       setError(`Error of status: ${res.status}`);
  //     } else {
  //       setMovies(res.data.results);
  //     }
  //   });
  // };

  //onSearchBar update
  // const onSearchBarChange = (str) => {
  //   setLoading(true);
  //   //make sure have query str to pass
  //   if (str !== "") {
  //     searchMovies(str).then((res) => {
  //       setLoading(false);
  //       if (res.status !== 200) {
  //         //TODO: add conditional retry
  //         setError(`Error of status: ${res.status}`);
  //       } else {
  //         setMovies(res.data.results);
  //       }
  //     });
  //   } else {
  //     fetchLatestMovies();
  //   }
  // };

  return (
    <WindowContext.Provider value={{ local, setLocal }}>
      <NavBar />
      <DisplayBody />
    </WindowContext.Provider>
  );
};

export default App;
