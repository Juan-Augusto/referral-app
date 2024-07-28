import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../../components/buttons";
import { useAuth0 } from "@auth0/auth0-react";

const AuthPage = () => {
  const isDarkMode = useSelector((state) => state.darkMode.isDarkMode);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

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
        <div className="space-y-2">
          {!isAuthenticated ? (
            <Button
              onClick={() => loginWithRedirect()}
              styleDetails={`w-full p-2 rounded ${
                isDarkMode
                  ? "bg-yellow-500 text-gray-800"
                  : "bg-green-500 text-white"
              }`}
            >
              Log In / Sign Up
            </Button>
          ) : (
            <div>
              <p>Welcome, {user.name}!</p>
              <Button
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Log Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
