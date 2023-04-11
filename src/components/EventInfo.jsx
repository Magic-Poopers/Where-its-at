import React from "react";
import styles from './EventInfo.module.css';

const EventInfo = (props) => {
  return <section className={styles.eventInfo}>
    <h2 className={styles.h2}>Lasse-Stefanz</h2>
    <time className={styles.time} dateTime={``}>
      21 mars
      kl 
      19.00-21.00
      </time>
    <address className={styles.place}>@ Kjell Härnqvistsalen</address>

    <section className={styles.eventInfoSection}>
      <h3 className={styles.h3}>1050 sek</h3>
      <aside>Komponent med räknare</aside>
    </section>
    
  </section>;
};

export default EventInfo;


// {
//   "name": "Lasse-Stefanz",  ->>> props.name
//   "price": 400,             ->>> props.price
//   "where": "Avicii arena",  ->>> props.where
//   "when": {
//     "date": "21 Mar",       ->>> props.when.date
//     "from": "20.00",        ->>> props.when.from
//     "to": "22:00"           ->>> props.when.to
//   }
// },