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

export const saveClientDetails = async (profileData,token) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/client/save`,profileData, {
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