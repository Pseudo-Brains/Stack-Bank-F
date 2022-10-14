import axios from "axios";

const API5_URL = "http://localhost:4040/api/tx/loan/";

const loan = async (transferData, token, SecUSerInfo) => {
  const config = {
    headers: {
      token: token,
      SecUSerInfo: SecUSerInfo,
    },
  };
  const response = await axios.post(API5_URL, transferData, config);

  return response.data;
};

const API6_URL = "http://localhost:4040/api/tx/airtime/";

const airtime = async (transferData, token, SecUSerInfo) => {
  const config = {
    headers: {
      token: token,
      SecUSerInfo: SecUSerInfo,
    },
  };
  const response = await axios.post(API6_URL, transferData, config);

  return response.data;
};

const otherServices = {
  loan,
  airtime,
};

export default otherServices;
