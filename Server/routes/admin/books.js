var express = require('express');
var router = express.Router();
const db = require('../../db/models/index');
const hasPermission = require('../../hasPermission');

const books = require('../../db/models/books');

db.books.belongsTo(db.users, { foreignKey: 'userId' });

router.get('/', function (req, res) {
  if (hasPermission(req.headers.authorization)) {
    books.getAllBooks()
      .then((result) => {
        res.send(result);
      })
      .catch(() => {
        res.status(404).send({ message: 'Something went wrong' });
      });
  } else {
    res.sendStatus(403);
  }
});

router.put('/', function (req, res) {
  if (hasPermission(req.headers.authorization)) {
    const id = req.body.id;
    const name = req.body.name;
    const description = req.body.description;
    const price = req.body.price;
    const amount = req.body.amount;
    db.books.update({
      name: name,
      description: description,
      price: price,
      amount: amount,
    }, {
      where: {
        id: id,
      },
    })
      .then(() => {
        books.getAllBooks()
          .then((result) => {
            res.send(result);
          })
          .catch(() => {
            res.status(404).send({ message: 'Something went wrong' });
          });
      })
      .catch(() => res.sendStatus(404));
  } else {
    res.sendStatus(403);
  }
});

router.post('/', function (req, res) {
  if (hasPermission(req.headers.authorization)) {
    const name = req.body.name;
    const description = req.body.description || '';
    const price = req.body.price;
    const amount = req.body.amount;
    db.books.create({
      name: name,
      description: description,
      price: price,
      amount: amount,
    })
      .then(() => {
        books.getAllBooks()
          .then((result) => {
            res.send(result);
          })
          .catch(() => {
            res.status(404).send({ message: 'Something went wrong' });
          });
      })
      .catch(() => res.sendStatus(404));
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
