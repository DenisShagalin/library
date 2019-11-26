const express = require('express');
const router = express.Router();

const books = require('../db/models/books');

router.get('/', (req, res) => {
  books.getAllBooks()
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.status(404).send({ message: 'Something went wrong' });
    });
});

router.get('/my-books/:userId', (req, res) => {
  req.checkParams('userId').isString();
  let errors = req.validationErrors();
  if (errors) {
    res.status(404).send({ message: 'Something went wrong' });
  } else {
    const { userId } = req.params;
    books.getBooksByUserId(userId)
      .then((result) => {
        res.send(result);
      })
      .catch(() => {
        res.status(404).send({ message: 'Something went wrong' });
      });
  }
});

module.exports = router;