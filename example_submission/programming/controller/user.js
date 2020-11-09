const userService = require("./service/user");
const currencyService = require("./service/currency");

module.exports = {
  getAllUser: async (req, res) => {
    try {
      const user_a = await userService.findDataA();
      const user_b = await userService.findDataB();
      return res.status(200).send({ alluser: { user_a, user_b } });
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  exchangeToUser: async (req, res) => {
    try {
      if (req.body.receiver === "A") {
        let wallet_a = await userService.findCurrencyA(
          req.body.currencyA.toUpperCase()
        );
        let wallet_b = await userService.findCurrencyB(
          req.body.currencyB.toUpperCase()
        );
        if (wallet_a && wallet_b) {
          if (wallet_b.balance > 0) {
            if (wallet_a.currency !== wallet_b.currency) {
              const exchange = await currencyService.findRate(
                wallet_b.currency,
                wallet_a.currency
              );
              wallet_a.balance += exchange.rate * req.body.balance;
              wallet_b.balance -= req.body.balance;
            } else {
              wallet_a.balance += req.body.balance;
              wallet_b.balance -= req.body.balance;
            }
            const balance_a = await userService.updateBalanceA(
              wallet_a.balance,
              wallet_a.currency
            );
            const balance_b = await userService.updateBalanceB(
              wallet_b.balance,
              wallet_b.currency
            );
            if (balance_a[0] === 1 && balance_b[0] === 1)
              res.status(200).send({
                status: "success",
                message: "Transfer Success",
              });
          } else {
            res.status(200).send({
              status: "failed",
              message: "Balance of B Not Enough",
            });
          }
        } else {
          console.log(balance_a, balance_b);
          res.status(200).send({
            status: "failed",
            message: "Plase check Crypto First",
          });
        }
      } else if (req.body.receiver === "B") {
        let wallet_a = await userService.findCurrencyA(
          req.body.currencyA.toUpperCase()
        );
        let wallet_b = await userService.findCurrencyB(
          req.body.currencyB.toUpperCase()
        );
        if (wallet_a && wallet_b) {
          if (wallet_a.balance > 0) {
            if (wallet_a.currency !== wallet_b.currency) {
              const exchange = await currencyService.findRate(
                wallet_a.currency,
                wallet_b.currency
              );
              wallet_b.balance += exchange.rate * req.body.balance;
              wallet_a.balance -= req.body.balance;
            } else {
              wallet_b.balance += req.body.balance;
              wallet_a.balance -= req.body.balance;
            }
            const balance_a = await userService.updateBalanceA(
              wallet_a.balance,
              wallet_a.currency
            );
            const balance_b = await userService.updateBalanceB(
              wallet_b.balance,
              wallet_b.currency
            );
            if (balance_a[0] === 1 && balance_b[0] === 1)
              res.status(200).send({
                status: "success",
                message: "Transfer Success",
              });
          } else {
            res.status(200).send({
              status: "failed",
              message: "Balance of B Not Enough",
            });
          }
        } else {
          console.log(balance_a, balance_b);
          res.status(200).send({
            status: "failed",
            message: "Plase check Crypto First",
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
};
