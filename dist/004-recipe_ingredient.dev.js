"use strict";

exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('recipe_ingredient').truncate().then(function () {
    // add data into insert
    return knex('recipe_ingredient').insert([{
      recipe_id: 1,
      ingredient_id: 1
    }, {
      recipe_id: ' fresh lemon juice (in cups)',
      ingredient_id: 1
    }, {
      recipe_id: 'olive oil (in tablespoons)',
      ingredient_id: 1
    }, {
      recipe_id: 'water (in cups)',
      ingredient_id: 1
    }, {
      recipe_id: 'saffron threads (in teaspoons)',
      ingredient_id: 1
    }, {
      recipe_id: 'fat-free, less-sodium chicken broth (in ounces)',
      ingredient_id: 1
    }, {
      recipe_id: 'olive oil (in tablespoons)',
      ingredient_id: 1
    }, {
      recipe_id: 'unpeeled jumbo shrimp',
      ingredient_id: 1
    }, {
      recipe_id: 'boned chicken thighs',
      ingredient_id: 2
    }, {
      recipe_id: 'shallot, peeled, very finely chopped',
      ingredient_id: 2
    }, {
      recipe_id: 'garlic clove, peeled, crushed',
      ingredient_id: 2
    }, {
      recipe_id: 'sumac (in tablespoons)',
      ingredient_id: 2
    }, {
      recipe_id: 'garam masala (in tablespoons)',
      ingredient_id: 2
    }, {
      recipe_id: 'cracked black pepper (in tablespoons)',
      ingredient_id: 2
    }, {
      recipe_id: 'sea salt in (tablespoons)',
      ingredient_id: 2
    }, {
      recipe_id: 'softened butter (in grams)',
      ingredient_id: 3
    }, {
      recipe_id: 'caster sugar (in grams)',
      ingredient_id: 3
    }, {
      recipe_id: 'large eggs',
      ingredient_id: 3
    }, {
      recipe_id: 'self-raising flour (in grams)',
      ingredient_id: 3
    }, {
      recipe_id: 'natural yogurt (in mililitres)',
      ingredient_id: 3
    }, {
      recipe_id: 'strawberries (in grams)',
      ingredient_id: 3
    }, {
      recipe_id: 'vanilla extract (in tablespoons)',
      ingredient_id: 3
    }]);
  });
};