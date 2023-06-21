import React from "react";
import Orders from "./components/Orders";



const Restaurant = () => {
 

      return (
        <div>
          <h3 className="rest-order">Restaurant Orders</h3>
          <ul className="order-list">
            <Orders orderType="Pizzas" />
            <Orders orderType="Salads" />
            <Orders orderType="Chocolate cake" />
            <Orders orderType="Vegetables" />
            <Orders orderType="Bread" />
          </ul>
        </div>
      );
};

export default Restaurant;
