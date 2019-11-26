var express = require('express');
var router = express.Router();
const db = require('../../db/models/index');
const hasPermission = require('../../hasPermission');

db.payments.belongsTo(db.books);
db.payments.belongsTo(db.users);

router.get('/:userId', function (req, res) {
  if (hasPermission(req.headers.authorization)) {
    const { userId } = req.params;
    console.log(userId);
    console.log(req.params);
    db.payments.findAll({
      attributes: ['id', 'payment', 'date'],
      // where: {
      //   userId: userId,
      // },
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
