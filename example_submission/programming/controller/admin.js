const adminService = require("./service/admin");
const userService = require("./service/user");

module.exports = {
  addCryptoRate: async (req, res) => {
    try {
      const check = await adminService.findCrypto(
        req.body.main,
        req.body.secondary
      );
      if (check !== null) {
        return res
          .status(200)
          .send({ status: "reject", reason: "Already Crypto" });
      } else {
        const crypto = await adminService.addCrypto(req.body);
        return res.status(200).send(crypto);
      }
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  getAllCrypto: async (req, res) => {
    try {
      const all_crypto = await adminService.findAll();
      return res.status(200).send(all_crypto);
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  changeCryptoRate: async (req, res) => {
    try {
      const check = await adminService.findCrypto(
        req.body.main,
        req.body.secondary
      );
      if (check !== null) {
        const update_rate = await adminService.changeRate(
          check.id,
          req.body.rate
        );
        if (update_rate[0] === 1) {
          res
            .status(200)
            .send({ status: "success", reason: "Update Complete" });
        } else {
          res
            .status(200)
            .send({ status: "failed", reason: "Please Try Again" });
        }
      } else {
        return res
          .status(200)
          .send({ status: "reject", reason: "Not Found Crypto" });
      }
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  increaseBalnace: async (req, res) => {
    try {
      console.log(req.body);
      if (req.body.user === "A") {
        const check = await userService.findCurrencyA(
          req.body.currency.toUpperCase()
        );
        if (check === null) {
          res
            .status(200)
            .send({ status: "failed", reason: "Please Add Cypto First" });
        } else {
          check.balance += req.body.balance;
          const balance = await userService.updateBalanceA(
            check.balance,
            check.currency
          );
          if (balance[0] === 1)
            res.status(200).send({
              status: "success",
              reason: "Increase Balance Complete",
            });
        }
      } else if (req.body.user === "B") {
        const check = await userService.findCurrencyB(
          req.body.currency.toUpperCase()
        );
        if (check === null) {
          res
            .status(200)
            .send({ status: "failed", reason: "Please Add Cypto First" });
        } else {
          check.balance += req.body.balance;
          const balance = await userService.updateBalanceB(
            check.balance,
            check.currency
          );
          if (balance[0] === 1)
            res.status(200).send({
              status: "success",
              reason: "Increase Balance Complete",
            });
        }
      } else {
        res
          .status(200)
          .send({ status: "failed", reason: "User Must be A or B." });
      }
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  decreaseBalnace: async (req, res) => {
    try {
      console.log(req.body);
      if (req.body.user === "A") {
        const check = await userService.findCurrencyA(
          req.body.currency.toUpperCase()
        );
        if (check === null || check.balance < req.body.balance) {
          res
            .status(200)
            .send({ status: "failed", reason: "Please Add Cypto First" });
        } else {
          check.balance -= req.body.balance;
          const balance = await userService.updateBalanceA(
            check.balance,
            check.currency
          );
          if (balance[0] === 1)
            res.status(200).send({
              status: "success",
              reason: "Decrease Balance Complete",
            });
        }
      } else if (req.body.user === "B") {
        const check = await userService.findCurrencyB(
          req.body.currency.toUpperCase()
        );
        if (check === null || check.balance < req.body.balance) {
          res.status(200).send({
            status: "failed",
            reason: "Please Add Cypto First Or Not Enough Cypto to Decrease",
          });
        } else {
          check.balance += req.body.balance;
          const balance = await userService.updateBalanceB(
            check.balance,
            check.currency
          );
          if (balance[0] === 1)
            res.status(200).send({
              status: "success",
              reason: "Decrease Balance Complete",
            });
        }
      } else {
        res
          .status(200)
          .send({ status: "failed", reason: "User Must be A or B." });
      }
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  addCryptoWallet: async (req, res) => {
    if (req.body.user === "A") {
      const check = await userService.findCurrencyA(req.body.currency);
      if (check !== null) {
        res
          .status(200)
          .send({ status: "failed", message: "Crypto has been Already" });
      } else {
        const crypto = await userService.addCryptoA(req.body);
        res.status(200).send(crypto);
      }
    } else if (req.body.user === "B") {
      const check = await userService.findCurrencyB(req.body.currency);
      if (check !== null) {
        res
          .status(200)
          .send({ status: "failed", message: "Crypto has been Already" });
      } else {
        const crypto = await userService.addCryptoB(req.body);
        res.status(200).send(crypto);
      }
    } else {
      res.status(200).send("User Must be A or B.");
    }
  },
};
