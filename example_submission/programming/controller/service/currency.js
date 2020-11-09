const db = require("../../model");
const currency = db.currency;
module.exports = {
  findRate: (main, secondary) => {
    return currency.findOne({
      where: { main: main, secondary: secondary },
    });
  },
};
