import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./auth/Login";
import SignIn from "./auth/SignIn";
import ClientProfile from "./client/ClientProfile";
import AddProject from "./client/AddProjects";
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
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
