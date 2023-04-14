import styles from "./Ticket.module.css";
import { useParams } from "react-router-dom";
import { useCart } from "../context/OrdersContext";
import Barcode from "../assets/barcode.svg";

function Ticket() {
  let message = "Ta hand om varandra!";
  const { index } = useParams();
  const { purchasedItems } = useCart();
  const event = purchasedItems[parseInt(index)];

  const generateTicketsForEvent = (event) => {
    return Array.from({ length: event.quantity }).map((_, i) => (
      <section className={styles.ticketContainer} key={i}>
        <article className={styles.ticket}>
          <section>
            <aside className={styles.info}>WHAT</aside>
            <h2 className={styles.name}>{event.name}</h2>
          </section>
          <section>
            <aside className={styles.info}>WHERE</aside>
            <h3 className={styles.where}>{event.where}</h3>
          </section>
          <section className={styles.grid3col}>
            <section>
              <aside className={styles.info}>WHEN</aside>
              <h4 className={styles.when}>{event.when.date}</h4>
            </section>
            <section>
              <aside className={styles.info}>FROM</aside>
              <h4 className={styles.when}>{event.when.from}</h4>
            </section>
            <section>
              <aside className={styles.info}>TO</aside>
              <h4 className={styles.when}>{event.when.to}</h4>
            </section>
          </section>
          <section className={styles.message}>
            <aside className={styles.info}>INFO</aside>
            <p className={styles.p}>{message}</p>
          </section>
          <section className={styles.img}>
            <img src={Barcode} alt="" />
            <h3>Ticket {i + 1}</h3>
          </section>
        </article>
      </section>
    ));
  };

  return <section>{generateTicketsForEvent(event)}</section>;
}

export default Ticket;
