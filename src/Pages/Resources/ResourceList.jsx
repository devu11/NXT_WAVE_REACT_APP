import React from "react";
import "./ResourceList.css";

function ResourceList({ resources }) {
  return (
    <div className="resource-list">
      {resources.map((resource, index) => (
        <div key={index} className="resource-card">
          <img
            src={resource.iconUrl}
            alt={resource.title}
            className="resource-icon"
          />
          <div className="resource-details">
            <div className="resource-category">{resource.category}</div>
            <div className="resource-title">{resource.title}</div>
            <div className="resource-link">
              <a href={resource.link}>{resource.link}</a>
            </div>
            <div className="resource-description">{resource.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ResourceList;
