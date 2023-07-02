import { useNavigate } from "react-router-dom";
import Signup from "./Signup";

function Login() {
  var navigate = useNavigate();

  function toSignup() {
    navigate("/signup");
  }
  return (
    <div>
      <input type="email" placeholder="email" />
      <input type="password" placeholder="password" />
      <button>login</button>
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
