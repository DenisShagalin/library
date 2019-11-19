const express = require('express');
const router = express.Router();
const db = require('../db/models/index');

const books = require('../db/models/books');

db.books.belongsTo(db.users, { foreignKey: 'userId' });
db.profits.belongsTo(db.users, { foreignKey: 'userId' });
db.profits.belongsTo(db.books, { foreignKey: 'bookId' });

router.post('/', (req, res) => {
  const bookId = req.body.book.id;
  const counter = req.body.book.counter;
  const userId = req.body.userId;
  const payment = req.body.book.price;
  db.profits.create({
    bookId: bookId,
    userId: userId,
    payment: payment,
  })
    .then(() => {
      db.books.update({
        userId: userId,
        counter: counter + 1,
      }, {
        where: {
          id: bookId,
        },
      })
        .then(() => {
          books.getNotOccupiedBooks()
            .then((result) => {
              res.send(result);
            })
            .catch(() => {
              res.status(404).send({ message : 'Something went wrong' });
            });
        })
        .catch(() => {
          res.status(404).send({ message: 'Something went wrong' });
        });
    })
    .catch(() => {
      res.status(404).send({ message: 'Something went wrong' });
    });
});

router.put('/', (req, res) => {
  const bookId = req.body.bookId;
  const userId = req.body.userId;
  db.books.update({
    userId: null,
  }, {
    where: {
      id: bookId,
    },
  })
    .then(() => {
      books.getBooksById(userId)
        .then((result) => {
          res.send(result);
        })
        .catch(() => {
          res.status(404).send({ message : 'Something went wrong' });
        });
    })
    .catch(() => {
      res.status(404).send({ message: 'Something went wrong' });
    });
});

module.exports = router;