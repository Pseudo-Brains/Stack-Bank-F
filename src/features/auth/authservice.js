import axios from "axios";
// import { logout } from "./authSlice";

// register user
const API_URL = "http://localhost:4040/api/register/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

//login user
const API_URL2 = "http://localhost:4040/api/login/";

const login = async (userData) => {
  const response = await axios.post(API_URL2, userData);

  if (response.data) {
    localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
// "proxy": "http://localhost:4040",
