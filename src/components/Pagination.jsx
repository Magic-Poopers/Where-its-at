import React from "react";
import styles from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={styles.paginationContainer}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};

export default Pagination;
