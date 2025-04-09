

#Introduction

This is the backend API for BLOG APP. It provides a RESTful API for managing various operations such as authentication, data handling, and business logic.



#Tech Stack

.Language: Node.js 

.Framework: Express.js

.Database: MongoDB 

.Authentication: JWT / OAuth

#Installation

1. Clone the repository:

git clone https://github.com/your-repo/backend.git
cd backend

2. Install dependencies:

npm install  # For Node.js

3. Setup environment variables (see Environment Variables).



#Configuration

. Ensure your database is running and configured correctly.

. Create a .env file with necessary credentials.


#Running the Server

Start the development server with:

. node server.js
. nodemon server.js (for hot reloading)
. npm start (for production environment)



#Authentication

. JWT-based authentication is implemented.

. Users must provide a valid token in the Authorization header for protected routes.



#Environment Variables

Create a .env file and add the following:

PORT=5001
DB_URI=mongodb://localhost:27017/BLOGDB
JWT_SECRET=your_secret_key