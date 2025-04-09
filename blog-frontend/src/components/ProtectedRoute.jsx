import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

/**
 * ProtectedRoute - A wrapper component that restricts access to authenticated users.
 * Redirects unauthenticated users to the login page.
 *
 * @param {React.ReactNode} children - The component(s) to render if authenticated.
 * @returns {React.ReactNode} - The children if authenticated, otherwise redirects.
 */

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth(); // Get the current authenticated user

  // If user is authenticated, render children; otherwise, redirect to login page
  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;




