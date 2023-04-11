import React from "react";
import styles from "./Start.module.css";
import startLogo from "../assets/startscreen.png";

export const Start = () => {
  return (
    <div className={styles.startPageContainer}>
      <img src={startLogo} alt="Start logo" />
      <h1 className={styles.heading}>Where It’s @</h1>
      <p className={styles.startText}>Ticketing made easy</p>
    </div>
  );
};
