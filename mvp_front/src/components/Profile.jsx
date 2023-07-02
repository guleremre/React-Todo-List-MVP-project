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

  // function localToken() {
  //   if (localStorage.getItem("token")) {
  //     //only user has token on local storage he can see the page
  //     axios
  //       .post(url, { token: localStorage.getItem("token") }) //we are taking token which saved to local storage
  //       .then(({ data }) => {
  //         if (data._id) {
  //           // even if user has token but it is not related to its id send to "/"
  //           setUser(data);
  //           getMyTodo(data._id); //after create we call func to here
  //         } else {
  //           navigate("/");
  //         }
  //       });
  //   } else {
  //     navigate("/");
  //   }
  // }

  function getMyTodo() {
    //then we will get users todos
    axios.get("http://localhost:3000/todo/" + user._id).then(({ data }) => {
      console.log("user Todos", data);
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
            getMyTodo(data._id); //after create we call func to here
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
      .post("http://localhost:3000/todo/", { title: todo, userId: user._id })
      .then((data) => {
        setTodo(""); //clears the input area
        getMyTodo(user._id); //after we need to refresh the page to
      });
  }

  return (
    <div>
      <h1>This is profile of {user.email} </h1>

      <input
        type="email"
        placeholder="todo"
        onChange={(e) => {
          setTodo(e.target.value); //when we click we meed to usestate to save and render
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
          return <li key={e._id}>{e.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Profile;
