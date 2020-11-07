const db = require("../../model");
const user = db.user;
module.exports = {
  addUser: (data) => {
    data.currency = data.currency.toUpperCase();
    return user.create(data);
  },
  findUser: (username) => {
    return user.findOne({ where: { username: username } });
  },
  findAll: () => {
    return user.findAll();
  },
  updateBalance: (id, balance) => {
    return user.update({ balance: balance }, { where: { id: id } });
  },
};
