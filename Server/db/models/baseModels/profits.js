
module.exports = (queryInterface, Sequelize) => {
  const profits = queryInterface.define('profits', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    userId: {
      type: Sequelize.INTEGER,
    },
    bookId: {
      type: Sequelize.INTEGER,
    },
    payment: {
      type: Sequelize.INTEGER,
    },
    date: {
      type: Sequelize.DATE,
    },
  }, {
    timestamps: false,
  });
  return profits;
};