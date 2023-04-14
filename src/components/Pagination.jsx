import React from "react";
import styles from "./Pagination.module.css";
import { NavLink, Navigate } from "react-router-dom";

const Pagination = () => {
  return (
    <nav className={styles.paginationContainer}>
      <NavLink to="/">
        <div className={styles.circle}></div>
      </NavLink>
      <NavLink to="/events">
        <div className={styles.circle}></div>
      </NavLink>
      <NavLink to="/sendorder">
        <div className={styles.circle}></div>
      </NavLink>
      <NavLink to="/tickets">
        <div className={styles.circle}></div>
      </NavLink>
    </nav>
  );
};

export default Pagination;
