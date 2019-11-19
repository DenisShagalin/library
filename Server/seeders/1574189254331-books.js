'use strict';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('books', [
      {
        name: 'Pinocchio',
        description: 'book1',
        price: 15,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'Harry Potter',
        description: 'book1',
        price: 11,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'Modame Bovary',
        description: 'book1',
        price: 12,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'The Adventures of Sherlock Holmes',
        description: 'book1',
        price: 20,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'The Three Musketeers',
        description: 'book1',
        price: 20,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'A Midsummer Night`s Dream',
        description: 'book1',
        price: 14,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'To the Lighthouse',
        description: 'book1',
        price: 12,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'The Lord of the Rings',
        description: 'book1',
        price: 19,
        userId: null,
        counter: 0,
        amount: 10,
      },
      {
        name: 'Agata Christi',
        description: 'book1',
        price: 20,
        userId: null,
        counter: 0,
        amount: 10,
      },
    ], {});
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('books', null, {})
  }
};
