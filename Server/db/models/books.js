const db = require('./index');

class Books {
  getAllBooks() {
    return db.books.findAll({
      attributes: ['id', 'name', 'description', 'price', 'amount'],
      order: ['name'],
    });
  };

  getNotOccupiedBooks() {
    return db.books.findAll({
      attributes: ['id', 'name', 'description', 'price', 'amount'],
      where: {
        amount: {
          [db.Op.gt]: 0, 
        }
      },
    });
  };

  // getBooksById(userId) {
  //   return db.books.findAll({
  //     where: {
  //       userId: userId,
  //     },
  //   });
  // };

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
