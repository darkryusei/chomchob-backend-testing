const express = require("express");
const router = express.Router();
const userController = require("../controller/user");
const adminController = require("../controller/admin");
const admin = require("../controller/service/admin");

router.get("/admin/crypto/getall", userController.getAllUser);
router.post("/admin/crypto/add", adminController.addCryptoWallet);
router.post("/admin/crypto/rate/add", adminController.addCryptoRate);
router.post("/admin/balance/increase", adminController.increaseBalnace);
router.post("/admin/balance/decrease", adminController.decreaseBalnace);
router.post("/admin/crypto/rate/change", adminController.changeCryptoRate);
router.post("/user/crypto/transfer", userController.exchangeToUser);

module.exports = router;
