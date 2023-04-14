import React from "react";
import styles from "./Listitem.module.css";
const ListItem = ({ eventList }) => {
  return (
    <div className={styles.eventContainer}>
      <aside className={styles.eventDate}>
        <p>{eventList.when.date}</p>
      </aside>
      <section className={styles.infoContainer}>
        <h3 className={styles.name}>{eventList.name}</h3>
        <p className={styles.where}>{eventList.where}</p>
        <aside className={styles.timePrice}>
          <p className={styles.time}>
            {eventList.when.from}-{eventList.when.to}
          </p>
          <h3 className={styles.price}>{eventList.price}:-</h3>
        </aside>
      </section>
    </div>
  );
};

export default ListItem;
