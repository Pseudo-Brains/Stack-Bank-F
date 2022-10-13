import axios from "axios";

const API4_URL = "http://localhost:4040/api/tx/transfer/";

const Transfer = async (transferData, token, SecUSerInfo) => {
  const config = {
    headers: {
      token: token,
      SecUSerInfo: SecUSerInfo,
    },
  };

  const response = await axios.post(API4_URL, transferData, config);

  return response.data;
};

const sendService = {
  Transfer,
};

export default sendService;
