const adminService = require("./service/admin");

module.exports = {
  addCryptoRate: async (req, res) => {
    try {
      let check = await adminService.findCrypto(
        req.body.main,
        req.body.secondary
      );
      if (check !== null) {
        return res
          .status(200)
          .send({ status: "reject", reason: "Already Crypto" });
      } else {
        let crypto = await adminService.addCrypto(req.body);
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
};
