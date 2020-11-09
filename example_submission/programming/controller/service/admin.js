const db = require("../../model");
const currency = db.currency;
const user = db.user;
module.exports = {
  addCrypto: (data) => {
    return currency.create(data);
  },
  findCrypto: (main, secondary) => {
    return currency.findOne({ where: { main: main, secondary: secondary } });
  },
  findAll: () => {
    return currency.findAll();
  },
  changeRate: (id, rate) => {
    return currency.update({ rate: rate }, { where: { id: id } });
  },
};
