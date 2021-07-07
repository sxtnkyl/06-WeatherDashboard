import React, { useContext } from "react";
import "./index.css";
import { WindowContext } from "../../util/windowContext";
import SearchBar from "./searchBar";

const Navbar = () => {
  const { local, setLocal } = useContext(WindowContext);

  return (
    <nav className="nav-container">
      <span>
        {local.currentCityData == null
          ? "fallback icon"
          : local.currentCityData.name}
      </span>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
