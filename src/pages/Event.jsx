import React, { useState } from "react";
import Header from "../components/Header";
import EventInfo from "../components/EventInfo";
import styles from "./Event.module.css";
import PrimaryButton from "../components/PrimaryButton";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/OrdersContext";

export const Event = () => {
  const location = useLocation();
  const event = location.state;
  const { addItemToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  return (
    <main className={styles.eventPage}>
      <section>
        <Header title={"Event"} />
        <p className={styles.paragraph}>
          You are about to score some tickets to
        </p>
      </section>
      <EventInfo event={event} />
      {/* <PrimaryButton children={"Lägg i varukorg"} onClick={handleClick} /> */}
    </main>
  );
};

export default Event;
