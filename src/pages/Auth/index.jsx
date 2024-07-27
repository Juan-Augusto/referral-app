import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Button } from "../../components/buttons";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);

  const handleSignup = async () => {
    try {
      await axios.post("/signup", { email, password });
      alert("User created");
    } catch (error) {
      alert(error.response.data.error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("/login", { email, password });
      setToken(response.data.token);
    } catch (error) {
      alert(error.response.data.error);
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
        <div className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className={`block ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`mt-1 p-2 rounded w-full ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className={`block ${
                isDarkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`mt-1 p-2 rounded w-full ${
                isDarkMode
                  ? "bg-gray-700 text-white border-gray-600"
                  : "border-gray-300"
              }`}
            />
          </div>
          <div className="flex flex-col space-y-1">
            <Button
              onClick={handleLogin}
              styleDetails={`p-2 ${
                isDarkMode
                  ? "bg-green-700 text-white"
                  : "bg-green-500 text-black"
              }`}
            >
              Login
            </Button>
            <Button
              onClick={handleSignup}
              styleDetails={`p-2 ${
                isDarkMode ? "text-green-500" : "text-green-600"
              }`}
            >
              Signup
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
