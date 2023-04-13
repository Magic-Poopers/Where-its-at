import React from "react";
import { Link, useLocation } from "react-router-dom";
import ListItem from "../components/ListItem";
import Ticket from "../components/Ticket";

export const AllTickets = () => {
  const location = useLocation();
  const tickets = location.state;
  // Can use props instead?

  const ticketsElem = tickets.map((ticket, i) => <Link key={i}><li>{ticket.name}</li></Link>)

  return <main>
    <ul>
      {tickets.length ? ticketsElem : <p>No tickets here...</p>}
    </ul>
  </main>;
};

export default AllTickets;
