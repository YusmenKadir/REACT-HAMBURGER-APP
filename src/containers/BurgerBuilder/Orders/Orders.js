import React, { Component } from "react";
import Order from "../../../components/Order/Order";
import axios from "../../../axios-orders";
import withErrorHandler from "../../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const fetchOrders = [];

        for (let key in res.data) {
          fetchOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        this.setState({ loading: false, orders: fetchOrders });
      })
      .catch((err) => this.setState({ loading: false }));
  }

  deleteHandler = (id) => {
    axios.delete(`/orders/${id}.json`);
  };
  render() {
    return (
      <div>
        {this.state.orders.map((order) => {
          return (
            <Order
              key={order.id}
              ingredients={order.ingredients}
              price={+order.price}
              deleteHandler={() => this.deleteHandler(order.id)}
            />
          );
        })}
      </div>
    );
  }
}

export default withErrorHandler(Orders, axios);
