import React from "react";
import './Header.css';

const Header = ({ title }) => {

  return <header className="page-header">
    <h1>{title} is the title</h1>
  </header>;
};

export default Header;
