const db = require("../../model/index");
const user = db.user;
module.exports = {
  addUser: (data) => {
    return user.create(data);
  },
  findUser: (username) => {
    return user.findOne({ where: { username: username } });
  },
  findAll: () => {
    return user.findAll();
  },
};
