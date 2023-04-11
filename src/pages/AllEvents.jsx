import React from "react";

export const AllEvents = () => {
  const [eventList, setEventList] = useState([])
  useEffect(() =>{
      async function getEvents() {
          const response = await fetch ("https://majazocom.github.io/Data/events.json")
          let data =await response.json()
          setEventList(data.events)
      }

      getEvents()
      console.log(eventList);
  },[])
return (
<div>
  <Search />
  {eventList.map(event => <ListItem eventList = {event} />)}
</div>
);
};
