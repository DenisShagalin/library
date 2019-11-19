const db = require('./index');

db.books.belongsTo(db.users, { foreignKey: 'userId' })

class Books {
  getAllBooks() {
    return db.books.findAll({
      attributes: ['id', 'name', 'description', 'price'],
      order: ['name'],
      include: [{
        model: db.users,
        attributes: ['id', 'name'],
      }],
    });
  };

  getNotOccupiedBooks() {
    return db.books.findAll({
      where: {
        occupied: 0, // FFIIIIIIIIIXXXXXXXXXXXXXXXXXXXX
      },
    });
  };

  getBooksById(userId) {
    return db.books.findAll({
      where: {
        userId: userId,
      },
    });
  };

  getTopBooks(limit) {
    return db.books.findAll({
      order: [
        ['counter', 'DESC'],
      ],
      limit: limit
    });
  }
}

module.exports = new Books();
