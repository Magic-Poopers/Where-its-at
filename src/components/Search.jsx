import React, { useEffect, useState } from "react";
import styles from "./Search.module.css";

const Search = ({ uppdateParentInputText }) => {
  const [inputText, setInputText] = useState();

  useEffect(() => {
    uppdateParentInputText(inputText);
  }, [inputText]);

  const searchIcon = <i class="fa-solid fa-magnifying-glass"></i>;
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
