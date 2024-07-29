import { referralAppProvider } from "../providers/referral-app.provider";
import bcrypt from "bcryptjs";
import { setReferralsAction } from "../store/actions/referrals.actions";

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
    setReferralsAction(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching referrals", error);
  }
};

export const updateReferral = async (id, email, description) => {
  const provider = referralAppProvider();
  try {
    const response = await provider.put(`/referrals/${id}`, {
      referralEmail: email,
      description,
    });
    await getReferrals();
    return response.json();
  } catch (error) {
    console.error("Error updating referral", error);
  }
};

export const cancelReferral = async (id) => {
  const provider = referralAppProvider();
  try {
    const response = await provider.delete(`/referrals/${id}`);

    await getReferrals();
    return response.json();
  } catch (error) {
    console.error("Error canceling referral", error);
  }
};
