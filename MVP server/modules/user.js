const mongoose = require("mongoose");
const connection = require("./connection");

const schema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { timestamps: true }
);
const User = mongoose.model("User", schema);

module.exports = User;
