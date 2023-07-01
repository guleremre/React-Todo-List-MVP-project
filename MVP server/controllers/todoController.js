const mongoose = require("mongoose");
const Todos = require("../modules/todo");
const Todo = require("../modules/todo");

const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
};

const postOneTodo = async (req, res) => {
  try {
    const newTodo = await Todo.create(req.body);
    //res.json(newTodo);
    res.json({ msg: "success" });
  } catch (err) {
    res.send(err);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const deleteOneTodo = await Todo.deleteOne({ _id: req.params.id });
    res.json(deleteOneTodo);
    //res.send("todo deleted");
  } catch (err) {
    res.send(err);
  }
};
// const deleteTodo = async (req,res) => {
//   const _id = req.params.id;
//   try {
//     const newDeleteTodo = await Todo.findByIdAndDelete(_id);
//     res.json(newDeleteTodo);
//     //res.send("todo deleted");
//   } catch (err) {
//     res.send(err);
//   }
// };

const updateTodo = async (req, res) => {
  try {
    const updateTodo = await Todo.findByIdAndUpdate(
      { _id: req.params.id },
      req.body
    );
    res.json(updateTodo);
  } catch (err) {
    res.send(err);
  }
};
const getAllUserTodo = async (req, res) => {
  try {
    const todos = await Todo.find({ userId: req.params.userId });
    res.json(todos);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getAllTodo,
  postOneTodo,
  deleteTodo,
  updateTodo,
  getAllUserTodo,
};
