import React from "react";
import styles from "./OrderItem.module.css";
import { useCart } from "../context/OrdersContext";
export const OrderItem = ({ event }) => {
  const { updateQuantity, removeItem } = useCart();
  const incrementQuantity = () => {
    updateQuantity(event, 1);
  };

  const decrementQuantity = () => {
    if (event.quantity > 1) {
      updateQuantity(event, -1);
    } else {
      removeItem(event);
    }
  };

  return (
    <div className={styles.card}>
      <div className={styles.eventContainer}>
        <h2 className={styles.eventName}>{event.name}</h2>
        <p className={styles.eventDate}>
          {" "}
          {event.when.date} kl {event.when.from} - {event.when.to}
        </p>
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
