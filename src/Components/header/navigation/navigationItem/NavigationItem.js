import React from "react";
import { NavLink } from "react-router-dom";
import { listItem, link, activeLink } from "./NavigationItem.module.css";

const NavigationItem = ({ name, path, exact }) => {
  return (
    <li className={listItem}>
      <NavLink
        to={path}
        exact={exact}
        className={link}
        activeClassName={activeLink}>
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
