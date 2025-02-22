import React from "react";
import classes from "./CheckoutSummary.css";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";


const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope it tastes well!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>

      <Button btnType="Danger" clicked={props.onCheckOutCancelled}>
        Cancel
      </Button>
        <Button btnType="Success" clicked={props.onCheckOutContinued}>
          Continue
        </Button>
      
    </div>
  );
};

export default CheckoutSummary;
