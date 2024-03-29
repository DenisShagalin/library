const express = require('express');
const router = express.Router();
const md5 = require('md5');
const db = require('../db/models/index');
const jwt = require('jsonwebtoken');
const config = require('./config.json');

db.users.belongsTo(db.roles, { foreignKey: 'roleId' })

router.post('/', (req, res) => {
  req.checkBody('Name').isString();
  req.checkBody('Password').isString();
  let errors = req.validationErrors();
  if (errors) {
    res.status(404).send({ message: 'Invalid name or password' });
  } else {
    const name = req.body.Name;
    const password = req.body.Password;
    const hash = md5(password);
    db.users.findOne({
      attributes: ['id', 'name'],
      where: {
        name: name,
        password: hash,
      },
      include: [{
        model: db.roles,
      }]
    })
      .then((result) => {
        if (!result) {
          throw new Error();
        }
        const token = jwt.sign(
          { role: result.dataValues.role.name },
          config.secret,
          { expiresIn: config.tokenLife }
        );
        const permissions = {
          user: result,
          token,
        }
        res.send(permissions);
      })
      .catch(() => {
        res.status(404).send({ message: 'Invalid name or password' });
      });
  }
});

module.exports = router;