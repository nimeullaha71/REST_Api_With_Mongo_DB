const express = require("express");
const router = express.Router();

const { getAllUsers,getOneUser,createUser, updateUser, deleteUser } = require("../controllers/user.controller");


router.get("/",getAllUsers);
router.post("/:id",getOneUser);
router.post("/createUser",createUser);
router.put("/:id",updateUser);
router.delete("/:id",deleteUser);

module.exports = router;


//user name = user1
//DB_password = QwIFNqfpNUbsG