"use strict";

var express = require('express');

var Ingredients = require('./ingredient-model.js');

var router = express.Router(); // /api/ingredients/:id/recipes

router.get('/:id/recipes', function (req, res) {
  var id = req.params.id;
  Ingredients.getRecipesWithIngredient(id).then(function (recipes) {
    if (recipes.length) {
      // console.log(recipe)
      res.status(200).json(recipes);
    } else {
      res.status(404).json({
        message: 'Could not find recipe for given ingredient'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get recipes'
    });
  });
});