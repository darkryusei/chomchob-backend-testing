const db = require("../../model");
const currency = require("../../model/currency");
const userA = db.userA;
const userB = db.userB;
module.exports = {
  // addUser: (data) => {
  //   data.currency = data.currency.toUpperCase();
  //   return user.create(data);
  // },
  findDataA: () => {
    return userA.findAll();
  },
  findCurrencyA: (currency) => {
    return userA.findOne({ where: { currency: currency } });
  },
  updateBalanceA: (balance, currency) => {
    return userA.update(
      { balance: balance },
      { where: { currency: currency } }
    );
  },
  addCryptoA: (data) => {
    data.currency = data.currency.toUpperCase();
    return userA.create(data);
  },
  findDataB: () => {
    return userB.findAll();
  },
  findCurrencyB: (currency) => {
    return userB.findOne({ where: { currency: currency } });
  },
  updateBalanceB: (balance, currency) => {
    return userB.update(
      { balance: balance },
      { where: { currency: currency } }
    );
  },
  addCryptoB: (data) => {
    data.currency = data.currency.toUpperCase();
    return userB.create(data);
  },
};
