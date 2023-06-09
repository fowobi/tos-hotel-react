import React, { useState } from "react";

const Orders = ({orderType}) => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };

  return (
    <li>
      {orderType}: {orders}{" "}
      <button className="btn btn-primary" onClick={orderOne}>
        Add
      </button>
    </li>
  );
}

export default Orders;
