import axios from "axios";
// import { logout } from "./authSlice";

// register user
const API3_URL = "http://localhost:4040/api/tx/transfer/";

const Sendmoney = async (transferData, token, userInfo) => {
  const config = {
    Headers: {
      Authorization: token,
      Authentication: userInfo,
    },
  };

  const response = await axios.post(API3_URL, transferData, config);

  return response.data;
};

const API4_URL = "http://localhost:4040/api/tx/pretransfer/";

const preTransfer = async (transferData, token, userInfo) => {

  
  const config = {
    Headers: {
      Authorization: token,
      Authentication: userInfo,
    },
  };

  const response = await axios.post(API4_URL, transferData, config);

  return response.data;
};

const bankService = {
  Sendmoney,
  preTransfer,
};

export default bankService;
