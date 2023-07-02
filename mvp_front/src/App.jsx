import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}
export default App;

// import { useState } from "react";
// import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
// import "./App.css";
// import { rejects } from "assert";
// import { error } from "console";
// import axios from "axios";
// import avatar from "./assets/avatar.png";

// const url = "http://localhost:3000/uploads";

// function App() {
//   const [postImage, setPostImage] = useState({ myfile: "" });

//   const createPost = async (newImage) => {
//     try {
//       await axios.post(url, newImage);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     createPost(postImage);
//     console.log(postImage);
//   };
//   const handleFileUpload = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertToBase64(file);
//     setPostImage({ ...postImage, myfile: base64 });
//   };

//   return (
//     <>
//       <div className="App">
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="file-upload" className="">
//             <img src={/**postImage.myFile |*/ avatar} alt="" />
//           </label>
//           <input
//             type="file"
//             label="Image"
//             name="myfile"
//             id="file-upload"
//             accept=".jpeg ,.png, .jpg"
//             onChange={(e) => handleFileUpload(e)}
//           />
//           <h1>Stable Diffusion</h1>
//           <span>Designer</span>
//           <button type="submit">Submit</button>
//         </form>
//       </div>
//     </>
//   );
// }

// export default App;

// function convertToBase64(file) {
//   return new Promise((resolve, reject) => {
//     const fileReader = new FileReader();
//     fileReader.readAsDataURL(file);
//     fileReader.onload = () => {
//       resolve(fileReader.result);
//     };
//     fileReader.onerror = (error) => {
//       reject(error);
//     };
//   });
// }
