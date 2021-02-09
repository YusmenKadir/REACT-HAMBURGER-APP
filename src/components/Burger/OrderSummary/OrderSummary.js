import React, { Component } from "react";
import Auxx from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("Order summary updated");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey + this.props.ingredients[igKey]}>
            <span>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>
        );
      }
    );

    return (
      <Auxx>
        <h3>Your Order</h3>
        <p>
          Total Price: <strong> {this.props.price.toFixed(2)}</strong>
        </p>
        <p>A delicious burger with following ingredients</p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to Checkout?</p>
        <Button btnType="Danger" clicked={this.props.purchasedCancelled}>
          {" "}
          CANCEL
        </Button>

        <Button btnType="Success" clicked={this.props.purchasedContinued}>
          {" "}
          CONTINUE{" "}
        </Button>
      </Auxx>
    );
  }
}

export default OrderSummary;
