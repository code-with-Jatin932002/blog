// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App








// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar.jsx";  // ✅ Make sure ".jsx" is correct
// import Home from "./pages/Home.jsx";
// import Dashboard from "./pages/Dashboard.jsx";
// import CreatePost from "./pages/CreatePost.jsx";
// import PostDetail from "./pages/PostDetail.jsx";
// import { AuthProvider } from "./context/AuthContext.jsx";  // ✅ Ensure correct path



// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/create-post" element={<CreatePost />} />
//           <Route path="/post/:id" element={<PostDetail />} />
//         </Routes>
//       </Router>
//     </AuthProvider>
//   );
// }
// export default App;


// import React from "react";

// const App = () => {
//   return (
//     <div className="h-screen flex items-center justify-center bg-red-500">
//       <h1 className="text-3xl font-bold text-white">🚀 Tailwind CSS is Working! 🎉</h1>
//     </div>
//   );
// };

// export default App;


// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Navbar from "./components/Navbar";
// import Login from "./pages/Login";
// import Dashboard from "./pages/Dashboard";
// import CreatePost from "./pages/CreatePost";
// import PostDetail from "./pages/PostDetail";

// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Login />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/post/:id" element={<PostDetail />} />
//         </Routes>
//       </Router>
//     </Provider>
//   );
// };

// export default App;






// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Provider } from "react-redux";
// import store from "./redux/store";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";
// import CreatePost from "./pages/CreatePost";
// import PostDetail from "./pages/PostDetail";
// import Footer from "./components/Footer"; 

// import LoginForm from "./pages/LoginForm";
// import SignupForm from "./pages/SignupForm";



// const App = () => {
//   return (
//     <Provider store={store}>
//       <Router>
//         <Navbar />
//         <div className="flex flex-col min-h-screen">
//           <div className="flex-grow"> {/* Makes sure footer stays at bottom */}




//         <Routes>
//           <Route path="/" element={<Home />} /> {/* ✅ Updated to show Home page */}

//           <Route path="/login" element={<LoginForm />} />
//         <Route path="/signup" element={<SignupForm />} />



//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/create" element={<CreatePost />} />
//           <Route path="/post/:id" element={<PostDetail />} />
//         </Routes>

//         </div>
//         </div>
//         <Footer /> 



//       </Router>
//     </Provider>
//   );
// };

// export default App;








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





