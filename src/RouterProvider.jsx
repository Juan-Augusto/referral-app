import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import LandingPage from "./pages/Home";
import ApiDocumentation from "./pages/SwaggerDocs";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/docs" element={<ApiDocumentation />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
