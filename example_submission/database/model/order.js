module.exports = (sequelize, Datatype) => {
  const Order = sequelize.define(
    "order",
    {
      order_id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      group_id: Datatype.INTEGER,
      promotion: Datatype.ENUM("yes", "no"),
      price: Datatype.INTEGER,
      discont: Datatype.INTEGER,
      code: Datatype.STRING,
    },
    {
      freezeTableName: true,
    }
  );
  return Order;
};
