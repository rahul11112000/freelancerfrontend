import React, { useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import { freelancerProjects } from "../../api/Api";

const DisplayFreelancerProject = () => {
  const [projects, setProjects] = useState([]); // State to store project data
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await freelancerProjects(token); // Fetch projects from the API
      setProjects(response); // Update state with the fetched projects
      console.log(response);
    };

    fetchProjects();
  }, [token]);

  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="flex-grow-1">
        <Header />
        {/* Sidebar */}
        <div className="d-flex">
          <Sidebar />
          <div className="container mt-4">
            <div className="row">
              {/* Map over projects to create a box for each project */}
              {projects.map((project, index) => (
                <div className="col-md-6" key={project.id}>
                  <div className="border p-3 rounded shadow-sm">
                    <h2 className="mb-3">{project.title}</h2>
                    <div className="d-flex justify-content-between mb-3">
                      <div>Duration: {project.duration}</div>
                      <div>Budget: ${project.budget}</div>
                    </div>
                    <b>Description:</b>
                    <p>{project.description}</p>
                    <b>Skills: </b>
                    <p>{project.skills}</p>
                    <div className="d-grid col-md-2">
                      <a
                        href={`/freelancer/apply/${project.id}`}
                        className="btn btn-primary"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default DisplayFreelancerProject;
