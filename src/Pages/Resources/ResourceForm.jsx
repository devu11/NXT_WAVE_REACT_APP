// src/components/ResourceForm.js
import React, { useState } from "react";
import "./ResourceForm.css";

function ResourceForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    link: "",
    iconUrl: "",
    tagName: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="resource-form-container">
      <div className="resource-form-left">
        <h2>Item Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">ITEM TITLE:</label>
            <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} />
          </div>
          <div className="form-group">
            <div className="linklabel">
            <label htmlFor="link">LINK:</label>
           
         
            </div>
            <input type="text" id="link" name="link" value={formData.link} onChange={handleChange} />
             </div>
          <div className="form-group">
            <label htmlFor="iconUrl">ICON URL:</label>
            <input type="text" id="iconUrl" name="iconUrl" value={formData.iconUrl} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="tagName">TAG NAME:</label>
            <input type="text" id="tagName" name="tagName" value={formData.tagName} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="category">CATEGORY:</label>
            <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
          </div>
          <div className="form-group">
            <div className="discriptionlable">
            <label htmlFor="description">DESCRIPTION:</label>
            </div>
            <textarea id="description" name="description" value={formData.description} onChange={handleChange}></textarea>
           
          </div>
          <button type="submit">CREATE</button>
        </form>
      </div>
      <div className="resource-form-right">
        <img
          src="https://boweninteriors.com.au/wp-content/uploads/2022/09/11-1-1024x768.jpg"
          alt="Placeholder"
        />
      </div>
    </div>
  );
}

export default ResourceForm;
