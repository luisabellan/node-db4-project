"use strict";

var db = require('../data/db-config'); // resolves to a promise that resolves to an array of all recipes in the database.


function find() {
  return db('recipes');
} // resolves to  Resolve to a single recipe object (or null)


function findById(id) {
  return db('recipes').where({
    id: id
  }).first();
} // Resolves to an array of all correctly ordered step for the given recipe: `[ { id: 17, recipe_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, recipe_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.


function add(recipe) {
  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db('recipes').insert(recipe).then(function (ids) {
            return findById(ids[0]);
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}

function remove(id) {
  return db('recipes').where({
    id: id
  }).first().del();
}