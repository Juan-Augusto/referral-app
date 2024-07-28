import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import LandingPage from "./pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
