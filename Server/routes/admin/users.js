var express = require('express');
var router = express.Router();
const db = require('../../db/models/index');
const hasPermission = require('../../hasPermission');

const users = require('../../db/models/users');

db.users.belongsTo(db.roles, { foreignKey: 'roleId' });

router.get('/', function (req, res) {
  if (hasPermission(req.headers.authorization)) {
    users.getAllUsers()
      .then((items) => {
        res.send(items);
      })
      .catch(() => {
        res.sendStatus(404);
      });
  } else {
    res.sendStatus(403);
  }
});

router.put('/', function (req, res) {
  if (hasPermission(req.headers.authorization)) {
    const id = req.body.id;
    const roleId = req.body.roleId;
    db.users.update({
      roleId: roleId,
    }, {
      where: {
        id: id,
      },
    })
      .then(() => {
        users.getAllUsers()
          .then((items) => {
            res.send(items);
          })
          .catch(() => {
            res.sendStatus(404);
          });
      })
      .catch(() => res.sendStatus(404));
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;
