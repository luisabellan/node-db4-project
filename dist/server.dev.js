"use strict";

var express = require('express');

var RecipeRouter = require('./recipes/recipe-router.js');

var IngredientRouter = require('./ingredients/ingredient-router.js');

var server = express();
server.use(express.json());
server.use('/api/recipes', RecipeRouter); //server.use('/api/ingredients', IngredientRouter);

module.exports = server;