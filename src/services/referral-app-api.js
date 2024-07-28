import { useNavigate } from "react-router-dom";
import { referralAppProvider } from "../providers/referral-app.provider";
import bcrypt from "bcryptjs";
export const signup = async (email, password) => {
  const provider = referralAppProvider();
  let response = {
    success: false,
    message: "",
    statusCode: 0,
  };

  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    await provider.post("/signup", {
      email,
      password: hashedPassword,
    });
    await login(email, password);
    response = {
      success: true,
      message: "User created",
      statusCode: 201,
    };
    return response;
  } catch (error) {
    console.error("Error signing up", error);
    response = {
      sucess: false,
      message: error.response.data.error,
      statusCode: error.response.status,
    };
    return response;
  }
};

export const login = async (email, password) => {
  const provider = referralAppProvider();
  let response = {
    success: false,
    message: "",
    statusCode: 0,
  };
  try {
    const loginData = await provider.post("/login", {
      email,
      password,
    });
    localStorage.setItem("token", loginData.data.token);
    localStorage.setItem("userID", loginData.data.id);
    response = {
      success: true,
      message: "User logged in",
      statusCode: 200,
    };
    return response;
  } catch (error) {
    console.error("Error logging in", error);
    response = {
      success: false,
      message: error.response.data.error,
      statusCode: error.response.status,
    };
    return response;
  }
};

export const submitReferral = async (referralEmail, referralDescription) => {
  const token = localStorage.getItem("token");
  const userID = localStorage.getItem("userID");
  const provider = referralAppProvider();

  const headers = {
    Authorization: `Bearer ${token}`,
  };

  await provider.post(
    "/referrals",
    {
      referralEmail,
      referralDescription,
      userID,
    },
    {
      headers,
    }
  );
};

export const getReferrals = async () => {
  const provider = referralAppProvider();
  try {
    const response = await provider.get("/referrals");
    return response.data;
  } catch (error) {
    console.error("Error fetching referrals", error);
  }
};
