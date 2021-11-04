import React from "react";
import { mainRoutes } from "../../../routes/mainRoutes";
import NavigationItem from "./navigationItem/NavigationItem";
import { list } from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav>
      <ul className={list}>
        {mainRoutes.map(({ name, path, exact }) => (
          <NavigationItem name={name} path={path} exact={exact} key={path} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
