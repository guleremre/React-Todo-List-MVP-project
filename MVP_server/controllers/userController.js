const User = require("../modules/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const signup = async (req, res) => {
  var checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    res.send({ msg: "user name already exists" });
  } else {
    //adding salt
    bcrypt.genSalt(10, async (err, salt) => {
      bcrypt.hash(req.body.password, salt, async (err, hash) => {
        //hashing salted
        var user = { email: req.body.email, password: hash };
        var createdUser = await User.create(user); //we are directly login after signing up
        var token = jwt.sign({ id: createdUser._id }, process.env.salt); //sending token
        res.send({ token });
      });
    });
  }
}; //user.password databaseden gelen !!!!!!!!
const login = async (req, res) => {
  var user = await User.findOne({ email: req.body.email }); //checking if email exist
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      //checking crypted password with crypted password from database
      if (result) {
        var token = jwt.sign({ id: user._id }, process.env.salt);

        //   var data = { _id: user._id, email: user.email }; //we dont send password to front end (artık token gönderiyoruz)
        res.send({ token });
      } else {
        res.send({ msg: "wrong password" });
      }
    });
  } else {
    res.send({ msg: "Wrong email" });
  }
};
//checking if user logged in
const verify = async (req, res) => {
  if (!req.body.token) {
    res.send({ message: false });
  } //decrypt and get back to the user id
  try {
    var payload = jwt.verify(req.body.token, process.env.salt);
    if (payload) {
      var user = await User.findOne({ _id: payload.id });
      if (user) {
        var token = jwt.sign({ id: user._id }, process.env.salt);
        res.send(user);
      } else {
        res.send("invalid token");
      }
    } else {
      res.send("invalid token");
    }
  } catch (error) {
    res.send("invalid token");
  }
};

module.exports = {
  signup,
  login,
  verify,
};
