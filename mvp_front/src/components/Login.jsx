import Signup from "./Signup";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const url = "http://localhost:3000/user/login";

function Login() {
  var navigate = useNavigate();
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");

  function toSignup() {
    navigate("/signup");
  }

  function login() {
    axios
      .post(url, { email, password })
      .then(({ data }) => {
        if (data.token) {
          //after login token returns
          localStorage.setItem("token", data.token); //we are saving token to local storage
          //if token returns navigate to profile
          navigate("/profile"); //******navitaging to page */
        } else {
          alert(data.msg);
        }
      })
      .catch((error) => {
        console.error("Error loggin:", error);
        alert("Error login. Please try again.");
      });
  }

  return (
    <div>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          login();
        }}
      >
        login
      </button>
      <p>
        you don't have an account?{" "}
        <a
          onClick={() => {
            toSignup();
          }}
        >
          signup
        </a>
      </p>
    </div>
  );
}

export default Login;
