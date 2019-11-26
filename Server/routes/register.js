const express = require('express');
const router = express.Router();
const md5 = require('md5');
const db = require('../db/models/index');

router.post('/', (req, res) => {
  req.checkBody('Name').isString();
  req.checkBody('Password').isString();
  let errors = req.validationErrors();
  if (errors) {
    res.status(404).send({ message: 'Something went wrong' });
  } else {
    const name = req.body.Name;
    const password = req.body.Password;
    const hash = md5(password);
    db.users.findOne({
      where: {
        name: name,
      },
    })
      .then((result) => {
        if (!result) {
          db.users.create({
            name: name,
            password: hash,
            roleId: 2,
          })
            .then(() => {
              res.sendStatus(200);
            })
            .catch(() => {
              res.status(404).send({ message: 'Something went wrong' });
            })
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        res.status(404).send({ message: 'User already exist' });
      });
  }
});

module.exports = router;