import React from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.scss";
import Header from "./header/Header";
import Profile from "./profile/Profile";
import OpenSource from './OpenSource/OpenSource'

export default function App() {
  const { darkMode } = useSelector((state) => state.header);

  return (
    <div className={"folio-container " + (darkMode ? "dark-mode" : "bright-mode")}>
      <Header />
      <Profile />
      <OpenSource />
    </div>
  );
}
