import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/OrdersContext";
import styles from "./AllTickets.module.css";
import Header from "../components/Header";
const AllTickets = () => {
  const { purchasedItems } = useCart();
  let cartItems = purchasedItems.map((item, index) => (
    <article key={index} className={styles.container}>
      <Link to={`/ticket/${index}`}>
        <h3>{item.name}</h3>
        <p>
          Date:{" "}
          <span className={styles.date}>
            {item.when.date} {item.when.from} - {item.when.to}
          </span>
        </p>

        <p>Place: {item.where}</p>
        <p>Quantity: {item.quantity}</p>
        <p>Price per ticket: {item.price} sek</p>
        <p>Total: {item.price * item.quantity} sek</p>
        <hr />
      </Link>
    </article>
  ));

  return (
    <div>
      <Header title={"Your Purchased Tickets"} />
      {purchasedItems.length ? (
        cartItems
      ) : (
        <p className={styles.noTickets}>
          You havent purchased any tickets yet!
        </p>
      )}
    </div>
  );
};

export default AllTickets;
