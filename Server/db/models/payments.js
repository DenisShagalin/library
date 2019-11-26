const db = require('./index');

db.payments.belongsTo(db.books);
db.payments.belongsTo(db.users);

class Payments {
  getPaymentsById(userId) {
    return db.payments.findAll({
      attributes: ['id', 'payment', 'date'],
      where: {
        userId: userId,
      },
      include: [
        {
          model: db.books,
          attributes: ['id', 'name'],
        },
        {
          model: db.users,
          attributes: ['id', 'name'],
        },
      ],
    });
  }

  getAllPayments() {
    return db.payments.findAll({
      attributes: ['id', 'payment', 'date'],
      include: [
        {
          model: db.books,
          attributes: ['id', 'name'],
        },
        {
          model: db.users,
          attributes: ['id', 'name'],
        },
      ],
    });
  }
}

module.exports = new Payments();
