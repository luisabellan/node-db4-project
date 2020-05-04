"use strict";

var db = require('../data/db-config.js'); // returns  all recipes in the system that utilize a single ingredient 
// TODO: Not working right now


function getRecipesWithIngredient(ingredient_id) {
  var recipes = db('i.name as ingredient_name', 'r.name  as recipe_name').join('ingredient as i').select('i.name as ingredient_name', 'r.name as recipe_name');
  return recipes.where({
    ingredient_id: ingredient_id
  });
}

module.exports = {
  getRecipesWithIngredient: getRecipesWithIngredient
};