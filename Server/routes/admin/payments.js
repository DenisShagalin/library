var express = require('express');
var router = express.Router();
const hasPermission = require('../../hasPermission');

const payments = require('../../db/models/payments')

router.get('/:userId', function (req, res) {
  const queryParams = req.params.userId;
  const userId = queryParams.replace('id=', '');
  if (hasPermission(req.headers.authorization)) {
    if (userId) {
      payments.getPaymentsById(userId)
        .then((result) => {
          res.send(result);
        })
        .catch(() => {
          res.status(404).send({ message: 'Something went wrong' });
        });
    } else {
      payments.getAllPayments()
        .then((result) => {
          res.send(result);
        })
        .catch(() => {
          res.status(404).send({ message: 'Something went wrong' });
        });
    }
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
