import React, { useState } from "react";
import styles from "./OrderItem.module.css";
import { useCart } from "../context/OrdersContext";
import { useNavigate } from "react-router-dom";
export const OrderItem = ({ event }) => {
  const navigate = useNavigate();
  const { addItemToCart, updateQuantity, cart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    updateQuantity(event, 1);
    console.log('öka')
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
    updateQuantity(event, -1);
    console.log('minska')
  };

  const handleAddToCartAndNavigate = () => {
    addToCart();
    navigate("/sendorder");
  };

  // const calculateTotal = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  // };
  return (
    <div className={styles.card}>
      <div className={styles.eventContainer}>
        <h2 className={styles.eventName}>{event.name}</h2>
        <p className={styles.eventDate}>{event.when.date}</p>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.buttons} onClick={decrementQuantity}>
          -
        </button>{" "}
        <p className={[styles.buttons, styles.itemTotal].join(" ")}>
          {event.quantity}
        </p>{" "}
        <button className={styles.buttons} onClick={incrementQuantity}>
          +
        </button>
      </div>
    </div>
  );
};
