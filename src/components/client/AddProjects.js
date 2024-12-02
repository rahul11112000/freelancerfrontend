import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
const AddProject = () => {
  const [projectData, setProjectData] = useState({
    title: "",
    duration: "",
    budget: "",
    description: "",
    skills: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({
      ...projectData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Project Data:", projectData);
    // Add your submit logic here
  };

  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="flex-grow-1">
        <Header />
        {/* Sidebar */}
        <div className="d-flex">
          <Sidebar />
          <div className="container mt-5">
            <div
              className="card p-4 shadow"
              style={{ maxWidth: "600px", margin: "0 auto" }}
            >
              <h3 className="text-center mb-4">Add Project</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Project Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    name="title"
                    value={projectData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="duration" className="form-label">
                    Duration (in weeks)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="duration"
                    name="duration"
                    value={projectData.duration}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="budget" className="form-label">
                    Budget (in USD)
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="budget"
                    name="budget"
                    value={projectData.budget}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows="4"
                    value={projectData.description}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="skills" className="form-label">
                    Skills (comma-separated)
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="skills"
                    name="skills"
                    value={projectData.skills}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Submit Project
                </button>
              </form>
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default AddProject;
