import React, { useState } from "react";
import styles from "./OrderItem.module.css";

export const OrderItem = ({ event }) => {
  const [clicks, setClicks] = useState(0);
  const handleAddClick = () => {
    setClicks(clicks + 1);
  };

  const handleRemoveClick = () => {
    setClicks(clicks - 1);
  };
  return (
    <div className={styles.card}>
      <div className={styles.eventContainer}>
        <h2 className={styles.eventName}>{event.name}</h2>
        <p className={styles.eventDate}>{event.date}</p>
      </div>

      <div className={styles.btnContainer}>
        <button className={styles.buttons} onClick={handleRemoveClick}>
          -
        </button>{" "}
        <p className={[styles.buttons, styles.itemTotal].join(" ")}>{clicks}</p>{" "}
        <button className={styles.buttons} onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
};
