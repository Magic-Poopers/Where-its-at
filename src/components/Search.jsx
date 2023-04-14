import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

const Search = ({ uppdateParentInputText }) => {
  const [inputText, setInputText] = useState();

  useEffect(() => {
    uppdateParentInputText(inputText);
  }, [inputText]);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        className={styles.input}
        placeholder="&#x1F50D;"
      />
    </div>
  );
};

export default Search;
