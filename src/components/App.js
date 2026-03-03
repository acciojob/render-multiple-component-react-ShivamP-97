import React from "react";
import '../styles/App.css';

const App = () => {
  const projects = [
    {
      name: "AI Personal Assistant",
      description: "A specialized AI that manages daily tasks and schedules autonomously."
    },
    {
      name: "Eco-Tracker App",
      description: "A mobile application to monitor and reduce individual carbon footprints in real-time."
    },
    {
      name: "Virtual Reality Classroom",
      description: "An immersive platform for remote students to interact in a 3D educational environment."
    }
  ];

  return (
    <div id="main">
      <div className="ns-wrapper">
        {projects.map((project, index) => (
          <div key={index} className="project-container">
            <h1 data-ns-test="project-name">{project.name}</h1>
            <h6 data-ns-test="project-description">{project.description}</h6>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;;