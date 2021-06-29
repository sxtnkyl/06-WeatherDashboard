import React, { useContext } from "react";
import "./index.css";
import { WindowContext } from "../../util/windowContext";

const Navbar = () => {
  const { local, setLocal } = useContext(WindowContext);

  return (
    <nav className="nav-container">
      <span>WEATHER DASHBOARD</span>
      <span>{local.currentCity === undefined && "missing"}</span>
    </nav>
  );
};

export default Navbar;
