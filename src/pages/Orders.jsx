import React from "react";
import styles from "./Orders.module.css";
import { OrderItem } from "../components/OrderItem";
import PrimaryButton from "../components/PrimaryButton";
import Header from "../components/Header";

const Orders = () => {
  const concerts = [
    {
      name: "Concert 1",
      date: "2023-04-11"
    },
    {
      name: "Concert 2",
      date: "2023-04-11"
    }
  ];
  const handleClick = () => {
    console.log("Clicked");
  };

  const items = concerts.map((concert, index) => {
    return <OrderItem event={concert} key={index} />;
  });
  return (
    <div className={styles.container}>
      <Header title={"Order"} />
      {items}
      <p className={styles.total}>Totalt värde på order</p>
      <p className={styles.price}>1310 sek </p>
      <PrimaryButton onClick={handleClick}>Skicka order</PrimaryButton>
    </div>
  );
};

export default Orders;
