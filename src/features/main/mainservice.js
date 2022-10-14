import axios from "axios";

const API0_URL = "http://localhost:4040/api/user/";

const mainP = async (token) => {
  const config = {
    headers: {
      token: token,
    },
  };
  const response = await axios.get(API0_URL, config);

  return response.data;
};

const mainService = {
  mainP,
};

export default mainService;
