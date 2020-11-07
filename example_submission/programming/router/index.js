const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const adminController = require("../controller/admin");

router.get("/get", (req, res) => {
  res.status(200).send("TEST");
});
router.post("/adduser", userController.regisUser);
router.get("/getalluser", userController.getAllUser);
router.post("/transfertouser", userController.exchangeToUser);
router.post("/addcrypto", adminController.addCryptoRate);
router.get("/getallcrypto", adminController.getAllCrypto);

module.exports = router;
