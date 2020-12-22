import React, { useState } from "react";
import "./Header.scss";
import Switch from "@material-ui/core/Switch";
import Headroom from "react-headroom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import { setDarkMode } from "./headerSlice";

export default function Header() {
  const { darkMode, name, items } = useSelector((state) => state.header);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(setDarkMode(!darkMode));
  };

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Headroom>
      <header>
        <Navbar light expand="md">
          <NavbarBrand>
            <div className="logo">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">{name}</span>
              <span className="grey-color">/&gt;</span>
            </div>
          </NavbarBrand>

          <NavbarToggler onClick={toggle} />

          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar></Nav>

            {items.map((item) => (
              <a className="header-item" key={item} href={"#" + item}>
                {item}
              </a>
            ))}
            <Switch
              className="header-item"
              checked={darkMode}
              onChange={handleChange}
              name="checked"
              inputProps={{ "aria-label": "secondary checkbox" }}
            />
          </Collapse>
        </Navbar>
      </header>
    </Headroom>
  );
}
