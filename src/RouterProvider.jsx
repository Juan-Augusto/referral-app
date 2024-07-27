import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthPage from "./pages/Auth";
import LandingPage from "./pages/Home";
import NavBar from "./components/navbar";
import { Layout } from "./components/layout";

const AppRouter = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default AppRouter;
