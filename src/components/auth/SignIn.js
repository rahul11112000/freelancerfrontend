import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";
import webImage from "../../assets/images/home.jpg";
import { signUp } from "../../api/Api";

const SignIn = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    role: "FREELANCER", // Default role
  });

  const [message, setMessage] = useState(null); // For success or error messages
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await signUp(formData); // Call the API
      setMessage({ type: "success", text: "Sign-up successful!" });
      console.log("Sign-up response:", response);
      navigate("/login");
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to sign up. Please try again.",
      });
    }
  };

  return (
    <div>
      <Header />
      <section
        className="hero-section"
        style={{
          background: `url(${webImage}) no-repeat center center/cover`,
          color: "white",
        }}
      >
        <div
          className="container d-flex justify-content-center align-items-center"
          style={{ height: "100vh" }}
        >
          <div className="card p-4 shadow" style={{ width: "400px" }}>
            <h3 className="text-center mb-4">Sign Up</h3>
            {message && (
              <div
                className={`alert ${
                  message.type === "success" ? "alert-success" : "alert-danger"
                }`}
              >
                {message.text}
              </div>
            )}
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
                  placeholder="Enter your full name"
                  value={formData.name}
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
                  placeholder="Enter your email"
                  value={formData.email}
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
                  placeholder="Choose a username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Create a password"
                  value={formData.password}
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
                  value={formData.role}
                  onChange={handleChange}
                  required
                >
                  <option value="FREELANCER">Freelancer</option>
                  <option value="CLIENT">Client</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignIn;
