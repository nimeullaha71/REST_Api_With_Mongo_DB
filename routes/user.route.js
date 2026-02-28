const express = require("express");
const router = express.Router();
const multer = require("multer");

const { getAllUsers,getOneUser,createUser, updateUser, deleteUser } = require("../controllers/user.controller");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }
});

const upload = multer({ storage });

router.post("/createUser", upload.single("image"), createUser);
router.get("/",getAllUsers);
router.post("/:id",getOneUser);
router.delete("/:id",deleteUser);
router.patch("/:id",updateUser);


module.exports = router;


//user name = user1
//DB_password = QwIFNqfpNUbsG