module.exports = (sequelize, Datatype) => {
  const Payment = sequelize.define(
    "payment",
    {
      payment_id: {
        type: Datatype.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      order_id: Datatype.INTEGER,
      payment: Datatype.ENUM("complete", "waitting", "failed"),
      date: Datatype.DATE,
    },
    {
      freezeTableName: true,
    }
  );
  return Payment;
};
