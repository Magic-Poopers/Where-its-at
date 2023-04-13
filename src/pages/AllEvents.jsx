import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ListItem from "../components/ListItem";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import styles from "./AllEvents.module.css";

export const AllEvents = () => {
  const [eventList, setEventList] = useState([]);
  const [inputText, setInputText] = useState();

  useEffect(() => {
    async function getEvents() {
      const response = await fetch(
        "https://majazocom.github.io/Data/events.json"
      );
      let data = await response.json();
      setEventList(data.events);
    }

    getEvents();
  }, []);

  function setParentInputText(text) {
    setInputText(text);
  }

  return (
    <div className={styles.allEventsPage}>
      <Header title={"Events"} />
      <Search uppdateParentInputText={setParentInputText} />
      {eventList.map((event, index) =>
        inputText === undefined ? (
          <Link to="/addtocart" state={event} key={index}>
            <ListItem eventList={event} key={index} />{" "}
          </Link>
        ) : event.name.toLowerCase().includes(inputText.toLowerCase()) ? (
          <Link to="/addtocart" state={event} key={index}>
            <ListItem eventList={event} key={index} />{" "}
          </Link>
        ) : (
          false
        )
      )}
    </div>
  );
};

export default AllEvents;
