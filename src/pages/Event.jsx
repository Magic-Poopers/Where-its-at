import React, { useState } from "react";
import Header from "../components/Header";
import EventInfo from "../components/EventInfo";
import styles from "./Event.module.css";
import { useLocation } from "react-router-dom";

export const Event = () => {
  const location = useLocation();
  const event = location.state;

  return (
    <main className={styles.eventPage}>
      <section>
        <Header title={"Event"} />
        <p className={styles.paragraph}>
          You are about to score some tickets to
        </p>
      </section>
      <EventInfo event={event} />
    </main>
  );
};

export default Event;
