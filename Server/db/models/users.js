const db = require('./index');

db.users.belongsTo(db.roles, { foreignKey: 'roleId' });
db.users.hasMany(db.books)

class Users {
  getAllUsers() {
    return db.users.findAll({
      attributes: ['id', 'name'],
      order: ['name'],
      include: [
        {
          model: db.books,
          attributes: ['id', 'name'],
        },
        {
          model: db.roles,
          order: ['name'],
        },
      ]
    });
  }
}

module.exports = new Users();
