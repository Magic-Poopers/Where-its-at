import React, { useEffect, useState } from "react";
import styles from "./EventInfo.module.css";
import { useCart } from "../context/OrdersContext";

const EventInfo = ({ event }) => {
  const { updateQuanity, cart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(event.price);

  function increase() {
    setQuantity((prevAmount) => prevAmount + 1);
  }
  function decrease() {
    setQuantity((prevAmount) => prevAmount - 1);
  }

  useEffect(() => {
    setTotalPrice(event.price * quantity);
  }, [quantity]);

  return (
    <section className={styles.eventInfo}>
      <h2 className={styles.h2}>{event.name}</h2>
      <time
        className={styles.time}
        dateTime={`${event.when.date} ${event.when.from}`}
      >
        {event.when.date} {event.when.from} - {event.when.to}
      </time>
      <address className={styles.place}>@ {event.where}</address>

      <section className={styles.eventInfoSection}>
        <h3 className={styles.h3}>{totalPrice} sek</h3>
        <section className={styles.amountSection}>
          <button className={styles.button} onClick={decrease}>
            {" "}
            -{" "}
          </button>
          <aside>{quantity}</aside>
          <button className={styles.button} onClick={increase}>
            {" "}
            +{" "}
          </button>
        </section>
      </section>
    </section>
  );
};

export default EventInfo;
