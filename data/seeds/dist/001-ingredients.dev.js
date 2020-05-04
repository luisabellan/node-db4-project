"use strict";

exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('ingredient').truncate().then(function () {
    // add data into insert
    return knex('ingredient').insert([{
      name: 'chopped fresh parsley (in cups)',
      quantity: 1
    }, {
      name: ' fresh lemon juice (in cups)',
      quantity: 0.25
    }, {
      name: 'olive oil (in tablespoons)',
      quantity: 1
    }, {
      name: 'water (in cups)',
      quantity: 1
    }, {
      name: 'saffron threads (in teaspoons)',
      quantity: 1
    }, {
      name: 'fat-free, less-sodium chicken broth (in ounces)',
      quantity: 48
    }, {
      name: 'olive oil (in tablespoons)',
      quantity: 2
    }, {
      name: 'unpeeled jumbo shrimp',
      quantity: 8
    }, {
      name: 'boned chicken thighs',
      quantity: 4
    }]);
  });
};