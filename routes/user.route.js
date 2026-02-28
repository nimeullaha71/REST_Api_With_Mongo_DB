const express = require("express");
const router = express.Router();

const { getAllUsers,getOneUser,createUser, updateUser, deleteUser } = require("../controllers/user.controller");

router.post("/createUser",createUser);

router.get("/",getAllUsers);
router.post("/:id",getOneUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);
router.patch("/:id",updateUser);

module.exports = router;


//user name = user1
//DB_password = QwIFNqfpNUbsG