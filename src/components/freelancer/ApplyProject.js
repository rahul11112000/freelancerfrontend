import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./Sidebar";
import {
  freelancerDetails,
  getProject,
  getClientDetails,
  applyForProject,
} from "../../api/Api";
import { useNavigate } from "react-router-dom";
const ApplyProject = () => {
  const [freelancer, setFreelancer] = useState(null);
  const [projectDetails, setProjectDetails] = useState(null);
  const [clientDetails, setClientDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [profileData, setProfileData] = useState({
    name: "",
    description: "",
    resume: null,
    budget: "",
    skills: "",
    freelancerId: "",
    clientId: "",
    projectId: "",
  });
  const navigate = useNavigate();
  const { id } = useParams(); // Assuming the project ID is in the URL as a parameter

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);

        // 1. Get the token from localStorage

        if (!token) {
          throw new Error("No token found. Please log in.");
        }

        // 2. Fetch freelancer details
        const freelancerResponse = await freelancerDetails(token);
        setFreelancer(freelancerResponse);
        //   3. Fetch project details using the ID from the URL
        const projectResponse = await getProject(id, token);
        setProjectDetails(projectResponse);
        // console.log(projectResponse[0].clientId);

        //   // 4. Fetch client details using the client ID from project details
        const clientId = projectResponse[0].clientId;

        setProfileData({
          name: freelancerResponse.name || "",
          freelancerId: freelancerResponse.id || "",
          clientId: clientId || "",
          projectId: projectResponse.id || "",
        });
      } catch (err) {
        setError(err.message || "An error occurred while fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleFileChange = (e) => {
  //   const { name } = e.target;
  //   const file = e.target.files[0];
  //   setProfileData((prevData) => ({
  //     ...prevData,
  //     [name]: file,
  //   }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(profileData);

    try {
      const response = await applyForProject(profileData, token); // Call the API
      navigate("/freelancer/profile");
    } catch (error) {}
  };

  return (
    <div>
      <div className="d-flex">
        {/* Main Content */}
        <div className="flex-grow-1">
          <Header />
          {/* Sidebar */}
          <div className="d-flex">
            <Sidebar />

            <div className="container mt-5">
              {/* <div
                className="card p-4 shadow"
                style={{ maxWidth: "600px", margin: "0 auto" }}
                id="profile"
              ></div> */}
              <h1>Apply Project</h1>
              {/* <div>
        <h2>Freelancer Details</h2>
        <pre>{JSON.stringify(freelancer, null, 2)}</pre>
      </div>
      <div>
        <h2>Project Details</h2>
        <pre>{JSON.stringify(projectDetails, null, 2)}</pre>
      </div>
      <div>
        <h2>Client Details</h2>
        <pre>{JSON.stringify(clientDetails, null, 2)}</pre>
      </div> */}
              <div className="container mt-5">
                <h2 className="mb-4">Freelancer Application</h2>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={profileData.name}
                      onChange={handleChange}
                      className="form-control"
                      required
                      readOnly
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description:
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      value={profileData.description}
                      onChange={handleChange}
                      className="form-control"
                      rows="4"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resume" className="form-label">
                      Resume:
                    </label>
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      // onChange={handleFileChange}
                      className="form-control"
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="budget" className="form-label">
                      Budget:
                    </label>
                    <input
                      type="number"
                      id="budget"
                      name="budget"
                      value={profileData.budget}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Skills:
                    </label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      value={profileData.skills}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ApplyProject;
