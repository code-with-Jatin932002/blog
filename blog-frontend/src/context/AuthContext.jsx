
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

/**
 * AuthProvider - Provides authentication state and functions to its children.
 * It manages user login/logout and persists authentication state in localStorage.
 */

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage if available
    return JSON.parse(localStorage.getItem("user")) || null;
  });

   /**
   * Logs in the user by saving user data in state and localStorage.
   * @param {Object} userData - The user information object
   */

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage
  };

   /**
   * Logs out the user by clearing state and removing user data from localStorage.
   */

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user"); // Remove user from localStorage
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

/**
 * Custom hook to access authentication context.
 * @returns {Object} Authentication state and functions.
 */

export const useAuth = () => {
  return useContext(AuthContext);
};
