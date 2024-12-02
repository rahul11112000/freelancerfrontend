import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { details, saveClientDetails } from "../../api/Api";
import Sidebar from "./Sidebar";

const ClientProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    username: "",
    address: "",
    mobileNo: "",
    pincode: "",
    role: "",
    clientid: "",
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  useEffect(() => {
    // Fetch user profile data from the API when the component mounts
    const fetchProfileData = async () => {
      try {
        // const response = await
        const response = await details(token); // Replace with actual API endpoint

        const data = await response;
        setProfileData({
          name: data.name || "",
          email: data.email || "",
          username: data.username || "",
          role: data.role || "",
          address: data.address || "",
          mobileNo: data.mobileNo || "",
          pincode: data.pincode || "",
          clientId: data.id || "",
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [message, setMessage] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", profileData);
    try {
      const response = await saveClientDetails(profileData, token); // Call the API
      setMessage({ type: "success", text: "Sign-up successful!" });
      console.log("Sign-up response:", response);
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to sign up. Please try again.",
      });
    }
  };

  if (loading) {
    return (
      <div>
        <Header />
        <div className="container mt-5 text-center">
          <p>Loading profile data...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <div className="container mt-5 text-center">
          <p>Error: {error}</p>
        </div>
        <Footer />
      </div>
    );
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
              id="profile"
            >
              <h3 className="text-center mb-4">Profile</h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={profileData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={profileData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={profileData.username}
                    onChange={handleChange}
                    required
                    readOnly
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={profileData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="mobileNo" className="form-label">
                    Mobile No
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="mobileNo"
                    name="mobileNo"
                    value={profileData.mobileNo}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pincode" className="form-label">
                    Pincode
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="pincode"
                    name="pincode"
                    value={profileData.pincode}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="role" className="form-label">
                    Role
                  </label>
                  <select
                    className="form-select"
                    id="role"
                    name="role"
                    value={profileData.role}
                    onChange={handleChange}
                    required
                  >
                    <option value="FREELANCER">Freelancer</option>
                    <option value="CLIENT">Client</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Update Profile
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

export default ClientProfile;
