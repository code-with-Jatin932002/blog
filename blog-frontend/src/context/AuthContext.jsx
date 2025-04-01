// import { createContext, useState, useContext, useEffect } from "react";
// import jwtDecode from "jwt-decode";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUser(jwtDecode(token));
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setUser(jwtDecode(token));
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import { createContext, useState, useContext, useEffect } from "react";
// import { jwtDecode } from "jwt-decode";  // ✅ Correct Import

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUser(jwtDecode(token));  // ✅ Works with named import
//     }
//   }, []);

//   const login = (token) => {
//     localStorage.setItem("token", token);
//     setUser(jwtDecode(token));
//   };

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);








// import React, { createContext, useState, useEffect } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setUser({ loggedIn: true });
//     }
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("token");
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };








// import React, { createContext, useContext, useState } from "react";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const login = (userData) => {
//     setUser(userData); // ✅ Set user after successful login
//   };

//   const logout = () => {
//     setUser(null); // ✅ Clear user on logout
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };




import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Retrieve user from localStorage if available
    return JSON.parse(localStorage.getItem("user")) || null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData)); // Store user in localStorage
  };

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

export const useAuth = () => {
  return useContext(AuthContext);
};
