import React from "react";
import { useLocation } from "react-router-dom";
import ListItem from "../components/ListItem";
import Ticket from "../components/Ticket";

export const AllTickets = () => {
  const location = useLocation();
  const tickets = location.state;

  // const ticketsElem = tickets.map((ticket, i) => />)

  return <section>
    <Ticket/>
  </section>;
};

export default AllTickets;
