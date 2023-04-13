import React, { useEffect, useState } from "react";
import styles from "./EventInfo.module.css";
import { useCart } from "../context/OrdersContext";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const EventInfo = ({ event }) => {
  const navigate = useNavigate();
  const { addItemToCart, updateQuantity, cart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(event.price);
  // const [totalPrice, setTotalPrice] = useState(event.price);

  const addToCart = () => {
    addItemToCart({ ...event, quantity });
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
    updateQuantity(event, 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateQuantity(event, -1);
    }
  };

  const handleAddToCartAndNavigate = () => {
    addToCart();
    navigate("/sendorder");
  };

  // const calculateTotal = () => {
  //   return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  // };

  console.log("test");

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
          <button className={styles.button} onClick={decrementQuantity}>
            {" "}
            -{" "}
          </button>
          <aside>{quantity}</aside>
          <button className={styles.button} onClick={incrementQuantity}>
            {" "}
            +{" "}
          </button>
        </section>
      </section>
      <PrimaryButton
        children={"Lägg i varukorg"}
        onClick={handleAddToCartAndNavigate}
      />
    </section>
  );
};

export default EventInfo;
