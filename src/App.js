import React from "react";
import Home from "./components/Home";
import LoginForm from "./components/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import RegisterForm from "./components/RegisterForm";
import ServicesPortal from "./components/ServicesPortal";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/keys-portal" element={
            <PrivateRoute>
              <ServicesPortal/>
            </PrivateRoute>
          }/>

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
