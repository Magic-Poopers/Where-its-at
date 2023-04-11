import React from "react";

const ListItem = () => {
  return (
    <>
      <aside>
        <p>{eventList.when.date}</p>
      </aside>
      <section>
        <h2>{eventList.name}</h2>
        <p>{eventList.where}</p>
        <p>{eventList.when.from}</p>
        <p>{eventList.when.to}</p>
        <h3>{eventList.price}</h3>
      </section>
    </>
    )
};

export default ListItem;
