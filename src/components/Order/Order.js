import React from "react";

import classes from "./Order.css";

const Order = (props) => {
  const ingredientsArr = [];

  for (let ingredientName in props.ingredients) {
    ingredientsArr.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }

  const ingr = ingredientsArr.map((ig) => {
    return <span key={ig.name}>{ig.name + " :" + ig.amount}</span>;
  });

  return (
    <div className={classes.Order} onClick={props.deleteHandler}>
      <p>Ingredients: {ingr} </p>
      <p>
        Price: <strong>{props.price.toFixed(2)}</strong>
      </p>
    </div>
  );
};

export default Order;
