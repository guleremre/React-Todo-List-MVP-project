const mongoose = require("mongoose");
const connection = require("./connection");

const schema = new mongoose.Schema(
  {
    name: String,
    // img: { data: Buffer, contentType: String },
    // prompt: String,
  },
  { timestamps: true }
);
const Img = mongoose.model("Img", schema);

module.exports = Img;
