import React, { useEffect, useState } from "react";
// import styles from "PrimaryButton.module.css";

const Search = ({uppdateParentInputText}) => {
  const [inputText, setInputText] = useState()


  useEffect(() => {
    uppdateParentInputText(inputText)
 }, [inputText]);

  
  return (
  <div>
    <input type="text" onChange={(e) => {setInputText(e.target.value)}}/>
  </div>
)
};

export default Search;
