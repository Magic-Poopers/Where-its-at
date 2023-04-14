import React from "react";
import styles from "./Orders.module.css";
import { OrderItem } from "../components/OrderItem";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { useCart } from "../context/OrdersContext";
import { NavLink } from "react-router-dom";

const Orders = () => {
  const { cart, updateQuantity } = useCart();

  const calculateTotal = () => {
    return cart
      ? cart.reduce((total, item) => total + item.price * item.quantity, 0)
      : 0;
  };
  const handleClick = () => {
    console.log("Clicked");
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
      <NavLink to='/tickets' state={cart}>
        <PrimaryButton onClick={handleClick}>Skicka order</PrimaryButton>
      </NavLink>
    </div>
  );
};

export default Orders;
