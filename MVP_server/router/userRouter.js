const router = require("express").Router();
const userController = require("../controllers/userController.js");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/verify", userController.verify);

module.exports = router;
