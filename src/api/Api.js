import axios from "axios";
// import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

const API_BASE_URL = "http://localhost:8080";

export const signUp = async (formData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signin`, formData);
    return response.data; // Return data received from the backend
  } catch (error) {
    console.error(
      "Error during sign-up:",
      error.response?.data || error.message
    );
    throw error; // Re-throw the error for further handling
  }
};

export const login = async (formData) => {
  try {
    const authHeader = `Basic ${btoa(
      `${formData.username}:${formData.password}`
    )}`;

    const response = await axios.post(
      `${API_BASE_URL}/token`,
      {},
      {
        headers: {
          Authorization: authHeader,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const details = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/client/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const saveClientDetails = async (profileData, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/client/save`,
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const saveProject = async (projectData, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/client/add/project`,
      projectData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const Projects = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/client/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

// Freelancer
export const freelancerDetails = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/freelancer/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const saveFreelancerDetails = async (profileData, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/freelancer/save`,
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const freelancerProjects = async (token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/freelancer/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const getProject = async (id, token) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/freelancer/project`, {
      params: { id },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};

export const getClientDetails = async (clientId, token) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/freelancer/client/details`,
      {
        params: { clientId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};


export const applyForProject = async (profileData, token) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/freelancer/apply/project`,
      profileData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    throw error;
  }
};
