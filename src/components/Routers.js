import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";
import SignIn from "./auth/SignIn";
import ClientProfile from "./client/ClientProfile";
import AddProject from "./client/AddProjects";
import DisplayProject from "./client/DisplayProjects";
import FreelancerProfile from "./freelancer/FreelancerProfile";
import DisplayFreelancerProject from "./freelancer/DisplayFreelancerProject";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/client/profile" element={<ClientProfile />} />
        <Route path="/client/add/project" element={<AddProject />} />
        <Route path="/client/show/project" element={<DisplayProject />} />
        <Route path="/freelancer/profile" element={<FreelancerProfile />} />
        <Route
          path="/freelancer/show/project"
          element={<DisplayFreelancerProject />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
