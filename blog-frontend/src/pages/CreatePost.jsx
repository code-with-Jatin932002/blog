// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/posts", { title, body });
//     navigate("/dashboard");
//   };

//   return (
//     <div className="container mt-4">
//       <h2>Create Post</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="text" className="form-control mb-2" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
//         <textarea className="form-control mb-2" placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)} />
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;






// import React from "react";
// const CreatePost = () => {
//   return (
//     <div className="p-4">
//       <h2 className="text-2xl">Create Post</h2>
//       <input type="text" placeholder="Title" className="border p-2 w-full mt-2" />
//       <textarea placeholder="Content" className="border p-2 w-full mt-2"></textarea>
//       <button className="bg-green-500 text-white px-4 py-2 mt-2">Submit</button>
//     </div>
//   );
// };
// export default CreatePost;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post("http://localhost:5000/api/posts", { title, content });
//     navigate("/dashboard");
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Create Post</h2>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 border w-full mb-2" />
//         <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="p-2 border w-full mb-2"></textarea>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/api/posts",
//         { title, content },
//         { withCredentials: true }  // ✅ Ensures authentication token is sent
//       );
//       navigate("/dashboard");
//     } catch (err) {
//       setError("Error creating post. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Create Post</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit} className="mt-4">
//         <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 border w-full mb-2" />
//         <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)} className="p-2 border w-full mb-2"></textarea>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false); // ✅ Add loading state
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault(); // ✅ Prevent page refresh
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/api/posts",
//         { title, content },
//         { withCredentials: true } // ✅ Ensures authentication token is sent
//       );

//       console.log("Post created:", response.data); // ✅ Debugging log
//       setLoading(false);
//       navigate("/dashboard");
//     } catch (err) {
//       setLoading(false);
//       setError("Error creating post. Please try again.");
//       console.error("Create post error:", err); // ✅ Debugging log
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Create Post</h2>
//       {error && <p className="text-red-500">{error}</p>}
//       <form onSubmit={handleSubmit} className="mt-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="p-2 border w-full mb-2"
//           required
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="p-2 border w-full mb-2"
//           required
//         ></textarea>
//         <button
//           type="submit"
//           className={`bg-blue-500 text-white px-4 py-2 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
//           disabled={loading} // ✅ Disable button while submitting
//         >
//           {loading ? "Submitting..." : "Submit"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;






// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const CreatePost = () => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token"); // ✅ Get JWT token
//       console.log(token,"token");




//       const res = await axios.post(
//         "http://localhost:5001/api/posts",
//         { title, content },
//         { headers: { Authorization: `Bearer ${token}` } } // ✅ Send token in headers
//       );
//       console.log(res,'response');  

      
    

//       alert("Post created successfully!");
//       navigate("/dashboard");
//     } catch (error) {
//       alert(error.response?.data?.message || "Error creating post. Please try again.");
//     }
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl">Create Post</h2>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="p-2 border w-full mb-2"
//           required
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="p-2 border w-full mb-2"
//           required
//         ></textarea>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;





// import React, { useState } from "react";
// import axios from "axios";

// const CreatePost = ({ onPostCreated }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const token = localStorage.getItem("token");
//       await axios.post(
//         "http://localhost:5001/api/posts",
//         { title, content },
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       alert("Post created successfully!");
//       onPostCreated(); // Redirect to Dashboard
//     } catch (error) {
//       alert(error.response?.data?.message || "Error creating post.");
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-lg">
//       <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="p-2 border w-full mb-2"
//           required
//         />
//         <textarea
//           placeholder="Content"
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="p-2 border w-full mb-2"
//           required
//         ></textarea>
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;








import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreatePost = ({ onPostCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:5001/api/posts",
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success("🎉 Post created successfully!");
      onPostCreated(); // Redirect to Dashboard
    } catch (error) {
      toast.error(error.response?.data?.message || "❌ Error creating post.");
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-2 border w-full mb-2"
          required
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="p-2 border w-full mb-2"
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreatePost;





