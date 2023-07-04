const mongoose = require("mongoose");
const router = require("express").Router();
const todoController = require("../controllers/todoController.js");

router.get("/", todoController.getAllTodo);
router.post("/", todoController.postOneTodo);
router.delete("/:id", todoController.deleteTodo);
router.put("/:id", todoController.updateTodo);
router.get("/:userId", todoController.getAllUserTodo);

module.exports = router; // bunun ismini değişme özel bu

// const mongoose = require("mongoose");
// const router = require("express").Router();
// const imgController = require("../controllers/imgController.js");

// router.get("/", imgController.getAllImg);
// router.post("/uploads", imgController.postOneImg);
// // router.delete("/:id", imgController.deleteImg);
// // router.put("/:id", imgController.updateImg);
// // router.get("/:userId", imgController.getAllUserImg);
// module.exports = router; // bunun ismini değişme özel bu
