import { useState } from "react";
import "./App.css";
import Resources from "./Pages/Resources/ResourceForm";
import Navbar from "./components/Navbar/Navbar";
import SectionBox from "./components/SectionBox/SectionBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ResourceList from "./Pages/Resources/ResourceList";
import ResourceForm from "./Pages/Resources/ResourceForm";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [resources, setResources] = useState([]);

  const handleAddClick = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (resource) => {
    setResources([...resources, resource]);
    setShowForm(false);
  };

  return (
    <div className="App">
      <Navbar onAddClick={handleAddClick} />

      {showForm ? <ResourceForm onSubmit={handleFormSubmit} /> : <SectionBox />}

      <ResourceList resources={resources} />
    </div>
  );
}

export default App;
