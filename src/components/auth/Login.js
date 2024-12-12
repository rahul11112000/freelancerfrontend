import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import webImage from "../../assets/images/home.jpg";
import { login } from "../../api/Api";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const [message, setMessage] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);
      setMessage({ type: "success", text: "login successful!" });

      localStorage.setItem("token", response);

      const decodedToken = jwtDecode(response);

      if (decodedToken.scope === "ADMIN") {
        console.log("User is an admin");
      } else if (decodedToken.scope === "FREELANCER") {
        navigate("/freelancer/profile");
      } else if (decodedToken.scope === "CLIENT") {
        navigate("/client/profile");
      } else {
        console.log("User role is unknown or not authorized");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to login. Please try again.",
      });
    }
  };

  return (
    <div>
      <Header />
      {/* <img src={webImage} className="card-img-top" alt="Project 2" /> */}
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
            <h3 className="text-center mb-4">Login</h3>
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
                <label htmlFor="username" className="form-label">
                  Username
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
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
                  name="password" // Added name attribute to match the state key
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
