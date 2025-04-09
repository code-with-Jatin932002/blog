


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CreatePost from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";

import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";
import InsidePage from "./pages/InsidePage"; // ✅ Inside page after successful login
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ Protected Route component
import { AuthProvider } from "./context/AuthContext"; // ✅ Authentication Context

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Router>

        <ToastContainer position="top-right" autoClose={3000} />


          <Navbar />
          <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignupForm />} />

                {/* ✅ Protected route for InsidePage */}
                <Route
                  path="/inside"
                  element={
                    <ProtectedRoute>
                      <InsidePage />
                    </ProtectedRoute>
                  }
                />

                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/post/:id" element={<PostDetail />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </Provider>

  );
};

export default App;





