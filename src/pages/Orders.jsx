import React from "react";
import styles from "./Orders.module.css";
import { OrderItem } from "../components/OrderItem";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";
import { useCart } from "../context/OrdersContext";

const Orders = () => {
  const { cart, updateQuantity } = useCart();
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleClick = () => {
    console.log("Clicked");
  };

  const items = cart.map((concert, index) => {
    return <OrderItem event={concert} key={index} />;
  });
  return (
    <div className={styles.container}>
      <Header title={"Order"} />
      {items}
      <p className={styles.total}>Totalt värde på order</p>
      <p className={styles.price}>{calculateTotal()} Sek</p>
      <PrimaryButton onClick={handleClick}>Skicka order</PrimaryButton>
    </div>
  );
};

export default Orders;
