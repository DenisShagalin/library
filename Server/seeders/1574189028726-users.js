'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('users', [
      {
        name: 'admin',
        password: '21232f297a57a5a743894a0e4a801fc3',
        roleId: 1,
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
