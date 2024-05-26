import React from "react";
import "./SectionBox.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SectionBox() {
  return (
    <div className="section-box-container">
      <div className="section-box">
        <div className="section resources-section">
          <h3>Resources</h3>
        </div>
        <div className="section">
          <h3>Request</h3>
        </div>
        <div className="section">
          <h3>User</h3>
        </div>
      </div>
      <div className="search-container">
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        <input type="text" placeholder="     Search" />
      </div>
    </div>
  );
}

export default SectionBox;
