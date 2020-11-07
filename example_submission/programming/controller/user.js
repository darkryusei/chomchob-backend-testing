const userService = require("./service/user");
const currencyService = require("./service/currency");

module.exports = {
  regisUser: async (req, res) => {
    try {
      let check = await userService.findUser(req.body.username);
      if (check !== null) {
        return res
          .status(200)
          .send({ status: "reject", reason: "Already Username" });
      } else {
        let user = await userService.addUser(req.body);
        return res.status(200).send(user);
      }
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const all_user = await userService.findAll();
      return res.status(200).send(all_user);
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
  exchangeToUser: async (req, res) => {
    try {
      const user = await userService.findUser(req.body.username);
      const receiver = await userService.findUser(req.body.receiver);
      if (user.balance !== 0) {
        user.balance -= req.body.balance;
        if (user.currency === receiver.currency) {
          receiver.balance += req.body.balance;
        } else {
          let currency = currencyService.exchangeRate(
            user.currency,
            receiver.currency
          );
          receiver.balance += req.body.balance * currency.rate;
        }
        const update_user = await userService.updateBalance(
          user.id,
          user.balance
        );
        const update_receiver = await userService.updateBalance(
          receiver.id,
          receiver.balance
        );
        if (update_user[0] === 1 && update_receiver[0] === 1) {
          res
            .status(200)
            .send({ status: "success", reason: "Transfer Complete" });
        }
      } else {
        res
          .status(200)
          .send({ status: "failed", reason: "Please Add Your Balance" });
      }
    } catch (error) {
      res.status(200).send({ status: "error", reason: error.message });
    }
  },
};
