import React from "react";
import Header from "../components/Header";
import EventInfo from "../components/EventInfo";
import styles from "./Event.module.css";
import PrimaryButton from "../components/PrimaryButton";

export const Event = () => {
  const event = {
    name: "Lasse-Stefanz",
    price: 400,
    where: "Avicii Arena",
    when: {
      date: "21 Mar",
      from: "20:00",
      to: "22:00"
    }
  };

  function handleClick() {
    // Lägg till i orderItems
    // Navigera till varukorg
    console.log("Clicked!");
  }

  return (
    <main className={styles.eventPage}>
      <section>
        <Header title={"Event"} />
        <p className={styles.paragraph}>
          You are about to score some tickets to
        </p>
      </section>
      <EventInfo event={event} />
      <PrimaryButton children={"Lägg i varukorg"} onClick={handleClick} />
    </main>
  );
};

export default Event;
