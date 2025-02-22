import React, { Component } from "react";
import { Route } from "react-router-dom";

import ContactData from "../../../containers/BurgerBuilder/Checkout/ContactData/ContactData";
import CheckoutSummary from "../../../components/Order/CheckoutSummary/CheckoutSummary";
class Checkout extends Component {
  state = {
    ingredients: {},
    totalPrice: 0,
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;

    for (let param of query.entries()) {
      //   ['salad',1]
      if (param[0] === "price") {
        price = param[1];
      } else {
        ingredients[param[0]] = +param[1];
      }
    }

    this.setState({ ingredients: ingredients, totalPrice: price });
  }

  checkoutCancelHandler = () => {
    this.props.history.goBack();
  };

  checkoutContinueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };
  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          onCheckOutCancelled={this.checkoutCancelHandler}
          onCheckOutContinued={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          render={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              price={this.state.totalPrice}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
