import React from "react";
import styles from "./Orders.module.css";
import { OrderItem } from "../components/OrderItem";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { useCart } from "../context/OrdersContext";
import { NavLink, useNavigate } from "react-router-dom";

const Orders = () => {
  const { cart, updateQuantity, copyTickets } = useCart();
  const navigate = useNavigate();

  const calculateTotal = () => {
    return cart
      ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;
  };
  const handleClick = () => {
    copyTickets();
    navigate("/tickets");
  };

  const items = cart.map((item, index) => {
    return <OrderItem event={item} key={index} />;
  });
  return (
    <div className={styles.container}>
      <Header title={"Order"} />
      {items}
      <p className={styles.total}>Totalt värde på order</p>
      <p className={styles.price}>{calculateTotal()} sek</p>
      <PrimaryButton onClick={handleClick}>Skicka order</PrimaryButton>
    </div>
  );
};

export default Orders;
