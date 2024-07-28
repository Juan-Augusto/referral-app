import axios from "axios";

export const referralAppProvider = () => {
  return axios.create({
    baseURL: process.env.REACT_APP_REFERRAL_APP_API_URL,
  });
};
