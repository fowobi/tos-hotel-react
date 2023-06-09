import React from "react";
import Orders from "./components/Orders";






const Restaurant = () => {
 

      return (
        <div>
          <h3>Restaurant Orders</h3>
          <ul className="pizzas-list">
            <Orders orderType="Pizzas" />
            <Orders orderType="Salads" />
            <Orders orderType="Chocolate cake" />
          </ul>
        </div>
      );
};

export default Restaurant;
