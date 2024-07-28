import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import LandingPage from "./pages/Home";
import { Layout } from "./components/layout";
import PrivateRoute from "./components/privateRoute";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<PrivateRoute element={LandingPage} />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
