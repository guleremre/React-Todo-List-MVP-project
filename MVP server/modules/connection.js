const mongoose = require("mongoose");
require("dotenv").config();

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
//mongoose.connect(process.env.mongo_url);
//const uri = `mongodb+srv://reactodo:reactodo@cluster0.9me7ngm.mongodb.net/week20?retryWrites=true&w=majority`;

const connection = mongoose
  .connect(process.env.DB_CONNECT, connectionParams)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log("Error connecting to the database", err);
  });

module.exports = connection;
