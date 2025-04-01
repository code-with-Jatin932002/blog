// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) return res.status(401).json({ message: "Unauthorized" });

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid token" });
//   }
// };

// module.exports = authMiddleware;



// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const token = req.cookies?.token || req.headers.authorization?.split(" ")[1]; // ✅ Handle Both Cookie & Header Token

//     if (!token) {
//         return res.status(401).json({ message: "Unauthorized - No token provided" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: "Unauthorized - Invalid token" });
//     }
// };

// module.exports = authMiddleware;






// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//     const token = req.cookies?.token || req.headers.authorization?.split(" ")[1];

//     if (!token) {
//         return res.status(401).json({ message: "Unauthorized - No token provided" });
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(401).json({ message: "Unauthorized - Invalid token" });
//     }
// };

// module.exports = authMiddleware;






// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization");

//   if (!token) return res.status(401).json({ message: "Access Denied" });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid Token" });
//   }
// };

// module.exports = authMiddleware;






// const jwt = require("jsonwebtoken");

// const authMiddleware = (req, res, next) => {
//   const token = req.header("Authorization");
//   console.log(token,'tokens')

//   if (!token) {
//     return res.status(401).json({ message: "Access Denied. No token provided." });
//   }

//   try {

//     const tokenWithoutBearer = token.split(" ")[1];
    

//     // const verified = jwt.verify(token, process.env.JWT_SECRET);
//     const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
//     console.log(verified,'verify');
//     req.user = verified; // Attach user info to request
//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid Token" });
//   }
// };

// module.exports = authMiddleware;











const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  const token = req.header("Authorization");

  if (!token) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  try {
    const tokenWithoutBearer = token.split(" ")[1]; // Remove "Bearer" from token
    const verified = jwt.verify(tokenWithoutBearer, process.env.JWT_SECRET);
    req.user = verified; // Attach user info to request
    next();
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};

module.exports = authMiddleware;





