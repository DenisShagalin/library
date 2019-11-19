const express = require('express');
const router = express.Router();
const db = require('../db/models/index');

const books = require('../db/models/books');

router.get('/', (req, res) => {
  books.getNotOccupiedBooks()
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.status(404).send({ message : 'Something went wrong' });
    });
});

router.get('/my-books/:userId', (req, res) => {
  const { userId } = req.params;
  books.getBooksById(userId)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.status(404).send({ message : 'Something went wrong' });
    });
});

router.get('/top/:limit', (req, res) => {
  const { limit } = req.params;
  books.getTopBooks(+limit)
    .then((result) => {
      res.send(result);
    })
    .catch(() => {
      res.status(404).send({ message : 'Something went wrong' });
    });
});

module.exports = router;