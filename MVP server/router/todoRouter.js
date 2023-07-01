const mongoose = require("mongoose");
const router = require("express").Router();
const todoController = require("../controllers/todoController.js");

router.get("/", todoController.getAllTodo);
router.post("/", todoController.postOneTodo);
router.delete("/:id", todoController.deleteTodo);
router.put("/:id", todoController.updateTodo);
router.get("/:userId", todoController.getAllUserTodo);

module.exports = router; // bunun ismini değişme özel bu
