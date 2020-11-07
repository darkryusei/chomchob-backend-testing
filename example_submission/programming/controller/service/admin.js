const db = require("../../model");
const currency = db.currency;
module.exports = {
  increaseBalance: (id, balance) => {},
  decreaseBalance: () => {},
  addCrypto: (data) => {
    return currency.create(data);
  },
  findCrypto: (main, secondary) => {
    return currency.findOne({ where: { main: main, secondary: secondary } });
  },
  findAll: () => {
    return currency.findAll();
  },
  changeRate: () => {},
};
