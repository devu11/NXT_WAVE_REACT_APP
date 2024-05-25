// src/components/Navbar.js
import React from "react";
import "./Navbar.css";

function Navbar({ onAddClick }) {
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSULYExsUDfGLx0wtDYblGzdIpzWkYlgbAkAbsrC-r5WyBoDpKS1UjVt1oRkP0Ss1Govng&usqp=CAU"
            alt="Company Logo"
          />
        </div>
        <div className="navbar-actions">
          <button className="add-button" onClick={onAddClick}>ADD ITEM</button>
          <div className="profile-circle">
            <img
              src="https://i.pinimg.com/736x/68/c5/0a/68c50ac30605fdb8ce0836aaeaacd48c.jpg"
              alt="Profile"
            />
          </div>
        </div>
      </nav>
      <hr className="navbar-line" />
    </div>
  );
}

export default Navbar;
