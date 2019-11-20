const express = require('express');
const router = express.Router();
const db = require('../db/models/index');
const hasPermission = require('../hasPermission');

db.payments.belongsTo(db.books, { foreignKey: 'bookId' });
db.payments.belongsTo(db.users, { foreignKey: 'userId' });

router.get('/users', (req, res) => {
  if (hasPermission(req.headers.authorization)) {
    // const { userId } = req.params;
    db.payments.findAll({
      attributes: ['id', 'payment', 'date'],
      order: [
        ['date', 'DESC'],
      ],
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
    })
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

module.exports = router;