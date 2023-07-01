const mongoose = require("mongoose");
const connection = require("./connection");

const schema = new mongoose.Schema(
  {
    todo: String,
    userId: String,
  },
  { timestamps: true }
);
const Todo = mongoose.model("Todo", schema);

module.exports = Todo;
