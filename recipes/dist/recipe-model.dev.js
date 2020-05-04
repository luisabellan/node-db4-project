"use strict";

var db = require('../data/db-config.js'); //  return a list of all recipes in the database.


function getRecipes() {
  return db('recipe');
} // resolves to  Resolve to a single recipe object (or null)


function findById(id) {
  return db('recipe').where({
    id: id
  }).first();
} // returns a list of all ingredients and quantities for a given recipe

/* SELECT  i.name as ingredient_name, i.quantity 
FROM [recipe] AS r
JOIN [ingredient] AS i; */


function getShoppingList(recipe_id) {
  return db('recipe as r').join('ingredient as i').select('i.name as ingredient_name', 'i.quantity').where({
    'r.id': recipe_id
  });
} // returns a list of step by step instructions for preparing a recipe

/* SELECT r.id, s.instructions 
FROM [recipe] AS r
JOIN [step] AS s
ON r.id = s.id; */


function getInstructions(recipe_id) {
  return db('recipe as r').select('r.id', 's.instructions').join('step as s', 'r.id', 's.id').where({
    'r.id': recipe_id
  });
}

function add(recipe) {
  return regeneratorRuntime.async(function add$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(db('recipe').insert(recipe).then(function (ids) {
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
  return db('recipe').where({
    id: id
  }).first().del();
}

module.exports = {
  getRecipes: getRecipes,
  getShoppingList: getShoppingList,
  getInstructions: getInstructions,
  findById: findById,
  add: add,
  remove: remove
};