const { Router } = require("express");
const router = Router();
const Auth = require("../Auth/auth");
const User = require("../Controllers/userController");

router.post("/login", Auth.loginUser);
router.post("/register", Auth.registerUser);

router.get("/all/user", User.getAlluser);
router.delete("/all/user/:id", User.deleteUser);

module.exports = router;
