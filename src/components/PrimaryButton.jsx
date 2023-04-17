import React from "react";
import styles from "./PrimaryButton.module.css";

const PrimaryButton = ({ children, onClick, isDisabled }) => {

  return (
    <button 
      type="button" 
      className={isDisabled ? `${styles.btn} ${styles.disabled}` : styles.btn}
      onClick={onClick} 
      disabled={isDisabled}>
        {children}
    </button>
  );
};

export default PrimaryButton;
