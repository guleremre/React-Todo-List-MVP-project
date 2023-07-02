const mongoose = require("mongoose");
const router = require("express").Router();
const imgController = require("../controllers/imgController.js");

router.get("/", imgController.getAllImg);
router.post("/", imgController.postOneImg);
// router.delete("/:id", imgController.deleteImg);
// router.put("/:id", imgController.updateImg);
// router.get("/:userId", imgController.getAllUserImg);

module.exports = router; // bunun ismini değişme özel bu
