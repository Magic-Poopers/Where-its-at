import React, { useState } from "react";
import Header from "../components/Header";
import EventInfo from "../components/EventInfo";
import styles from "./Event.module.css";
import PrimaryButton from "../components/PrimaryButton";
import { useLocation } from "react-router-dom";
import { useCart } from "../context/OrdersContext";

export const Event = () => {
  const location = useLocation();
  const event = location.state;
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState();

  // const event = {
  //   name: "Lasse-Stefanz",
  //   price: 400,
  //   where: "Avicii Arena",
  //   when: {
  //     date: "21 Mar",
  //     from: "20:00",
  //     to: "22:00",
  //   },
  // };

  function handleClick() {
    const newObj = { ...event, quantity };
    addItemToCart(newObj);

    console.log(newObj);
  }

  function setParentQuantity(amount) {
   setQuantity(amount)
  }

  return (
    <main className={styles.eventPage}>
      <section>
        <Header title={"Event"} />
        <p className={styles.paragraph}>
          You are about to score some tickets to
        </p>
      </section>
      <EventInfo event={event} setParentQuantity={setParentQuantity} />
      <PrimaryButton children={"Lägg i varukorg"} onClick={handleClick} />
    </main>
  );
};

export default Event;
