import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import ListItem from "../components/ListItem";
import Header from "../components/Header";

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
 
    return (
  <div>
    <Header title={"Events"} />
    <Search uppdateParentInputText = {setParentInputText}/>
    {eventList.map((event, index) => 
    (inputText === undefined) ? <ListItem eventList = {event} key={index}/> : (event.name.toLowerCase().includes(inputText.toLowerCase())) ? <ListItem eventList = {event} key={index}/> : false)}
  </div>

)
};

export default AllEvents;
