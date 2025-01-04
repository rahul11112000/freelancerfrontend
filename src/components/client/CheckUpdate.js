import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";

const CheckUpdate = () => {
  const { projectId } = useParams(); // Extract projectId from URL
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchFreelancers = async () => {
      console.log(projectId);
      try {
        const response = await axios.get(
          `http://localhost:8080/client/applied/freelancer`,
          {
            params: { projectId },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFreelancers(response.data);
      } catch (err) {
        setError("Failed to fetch freelancer details.");
      } finally {
        setLoading(false);
      }
    };

    fetchFreelancers();
  }, [projectId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  return (
    <div className="d-flex">
      {/* Main Content */}
      <div className="flex-grow-1">
        <Header />
        {/* Sidebar */}
        <div className="d-flex">
          <Sidebar />
          <div className="container mt-5">
            <h2 className="mb-4">
              Freelancer Details for Project ID: {projectId}
            </h2>
            <div className="row">
              {freelancers.length > 0 ? (
                freelancers.map((freelancer, index) => (
                  <div key={index} className="col-md-4">
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5 className="card-title">{freelancer.name}</h5>
                        <p className="card-text">{freelancer.description}</p>
                        <p>
                          <strong>Skills:</strong> {freelancer.skills}
                        </p>
                        <p>
                          <strong>Budget:</strong> ${freelancer.budget}
                        </p>
                        <div className="d-flex">
                          <div className="d-grid col-md-5">
                            <a
                              href={`/assign/freelancer/${freelancer.freelancerId}`}
                              className="btn btn-primary"
                            >
                              Assign Project
                            </a>
                          </div>
                          <div className="d-grid col-md-2"></div>
                          <div className="d-grid col-md-5">
                            <a
                              href={`/chat/freelancer/${freelancer.freelancerId}`}
                              className="btn btn-primary"
                            >
                              Chat
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p className="text-center">
                    No freelancers found for this project.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
        <br />
        <Footer />
      </div>
    </div>
  );
};

export default CheckUpdate;
