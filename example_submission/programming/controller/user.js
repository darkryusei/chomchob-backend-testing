const userService = require("./service/user");

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
      res.status(200).send({ status: "error", reason: error });
    }
  },
  getAllUser: async (req, res) => {
    try {
      const all_user = await userService.findAll();
      return res.status(200).send(all_user);
    } catch (error) {}
  },
};
