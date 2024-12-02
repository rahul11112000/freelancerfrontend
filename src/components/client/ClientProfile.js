import React, { useState, useEffect } from "react";
import Header from "../Header";
import Footer from "../Footer";
import { details } from "../../api/Api";

const ClientProfile = () => {
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    username: "",
    address: "",
    mobileno: "",
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
        const response = await details(token); // Replace with actual API endpoint

        const data = await response;
        setProfileData({
          name: data.name || "",
          email: data.email || "",
          username: data.username || "",
          role: data.role || "",
          address: data.address || "",
          mobileno: data.mobileno || "",
          pincode: data.pincode || "",
          clientid: data.id || "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Profile Data:", profileData);
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

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div
          className="card p-4 shadow"
          style={{ maxWidth: "600px", margin: "0 auto" }}
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
              <label htmlFor="mobileno" className="form-label">
                Mobile No
              </label>
              <input
                type="text"
                className="form-control"
                id="mobileno"
                name="mobileno"
                value={profileData.mobileno}
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
      <Footer />
    </div>
  );
};

export default ClientProfile;
