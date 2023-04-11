import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ListItem from "../components/ListItem";
export const AllEvents = () => {
  const [eventList, setEventList] = useState([])
  const [inputText, setInputText] = useState()
  useEffect(() =>{
      async function getEvents() {
          const response = await fetch ("https://majazocom.github.io/Data/events.json")
          let data =await response.json()
          setEventList(data.events)
        }
        
        getEvents()
      },[])
  
  function setParentInputText(text) {
    setInputText(text)
  }
  console.log(inputText);  
      return (
        <div>
  <Search uppdateParentInputText = {setParentInputText}/>
  {eventList.map((event, index) => <ListItem eventList = {event} key={index}/>)}
</div>

);
};
