import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

import "../App.css";
const MainNavigation: FC = () => {
  return (
    <nav>
      <NavLink
        to=""
        className={({ isActive }) =>
          isActive ? classes["link-active"] : classes.link
        }
      >
        Home
      </NavLink>
      <NavLink
        to="about"
        className={({ isActive }) =>
          isActive ? classes["link-active"] : classes.link
        }
      >
        About
      </NavLink>
      <NavLink
        to="contact"
        className={({ isActive }) =>
          isActive ? classes["link-active"] : classes.link
        }
      >
        Contact
      </NavLink>
      <NavLink
        to="products"
        className={({ isActive }) =>
          isActive ? classes["link-active"] : classes.link
        }
      >
        Products
      </NavLink>
    </nav>
  );
};
export default MainNavigation;
