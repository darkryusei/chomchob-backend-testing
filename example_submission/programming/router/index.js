const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.get("/get", (req, res) => {
  res.status(200).send("TEST");
});
router.post("/adduser", userController.regisUser);
router.get("/getalluser", userController.getAllUser);

module.exports = router;
