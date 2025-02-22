import React from "react";

import classes from "./NavigationItems.css";

import NavigationItem from "../../Navigation/NavigationItems/NavigationItem/NavigationItem";

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link="/">BurgerBuilder</NavigationItem>
      <NavigationItem link="/orders">Orders</NavigationItem>
    </ul>
  );
};

export default NavigationItems;
