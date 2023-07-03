import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const url = "http://localhost:3000/user/verify";

function Profile() {
  var navigate = useNavigate();
  var [user, setUser] = useState({
    _id: "",
    email: "",
  });
  var [todo, setTodo] = useState("");
  var [todos, setTodos] = useState([]);

  function getMyTodos(userId) {
    //then we will get users todos
    axios.get("http://localhost:3000/todo/" + userId).then(({ data }) => {
      setTodos(data);
    });
  }

  useEffect(() => {
    if (localStorage.getItem("token")) {
      //only user has token on local storage he can see the page
      axios
        .post(url, { token: localStorage.getItem("token") }) //we are taking token which saved to local storage
        .then(({ data }) => {
          if (data._id) {
            // even if user has token but it is not related to its id send to "/"
            setUser(data);
            getMyTodos(data._id); //after create we call func to here
          } else {
            navigate("/");
          }
        });
    } else {
      navigate("/");
    }
  }, []);

  function create() {
    axios
      .post("http://localhost:3000/todo/", { todo: todo, userId: user._id })
      .then((data) => {
        console.log({ data });
        getMyTodos(user._id); //after we need to refresh the page to
        setTodo(""); //clears the input area
      });
  }

  return (
    <div>
      <h3>
        This is profile of <br /> {user.email}{" "}
      </h3>

      <input
        type="text"
        placeholder=" todo"
        onChange={(e) => {
          setTodo(e.target.value); //when we click we need to usestate to save and render
        }}
      />
      <button
        onClick={() => {
          create();
        }}
      >
        Add Todo
      </button>
      <ul>
        {todos.map((e) => {
          return <li key={e._id}>{e.todo}</li>;
        })}
      </ul>
    </div>
  );
}

export default Profile;
