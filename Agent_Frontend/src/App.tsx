import LoginPage from "./pages/Login/LoginPage.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";
import DashboardPage from "./pages/Dashboard/DashboardPage.tsx";

export default function App(): React.JSX.Element {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  );
}
