import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Button } from "../../components/buttons";
import Alert from "../../components/alerts";
import { Input } from "../../components/inputs";
import { login, signup } from "../../services/referral-app-api";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const [alert, setAlert] = useState({ type: "", message: "" });
  const navigate = useNavigate();

  const closeAlert = () => {
    setAlert({ type: "", message: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e, action) => {
    e.preventDefault();
    let response;
    if (action === "signup") {
      response = await signup(formData.email, formData.password);
      if (response.success) {
        setAlert({ type: "success", message: response.message });
        navigate("/home");
      } else {
        setAlert({ type: "error", message: response.message });
      }
    } else if (action === "login") {
      response = await login(formData.email, formData.password);
      if (response.success) {
        setAlert({ type: "success", message: response.message });
        navigate("/home");
      } else {
        setAlert({ type: "error", message: response.message });
      }
    }
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      <div
        className={`p-8 rounded shadow-md w-full max-w-md ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        {alert.message !== "" && (
          <Alert
            type={alert.type}
            message={alert.message}
            onClose={closeAlert}
          />
        )}
        <form className="space-y-4" onSubmit={(e) => handleSubmit(e, "login")}>
          <div>
            <Input
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="space-y-2">
            <Button
              type="button"
              onClick={(e) => handleSubmit(e, "signup")}
              styleDetails={`w-full p-2 rounded ${
                isDarkMode
                  ? "bg-yellow-500 text-gray-800"
                  : "bg-green-500 text-white"
              }`}
            >
              Sign Up
            </Button>
            <Button
              type="submit"
              styleDetails={`w-full p-2 rounded ${
                isDarkMode
                  ? "bg-yellow-500 text-gray-800"
                  : "bg-blue-500 text-white"
              }`}
            >
              Log In
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AuthPage;
