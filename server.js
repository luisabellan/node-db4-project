const express = require('express');

const RecipeRouter = require('./recipes/recipe-router.js');
const IngredientRouter = require('./ingredients/ingredient-router.js');

const server = express();

server.use(express.json());

server.use('/api/recipes', RecipeRouter);
//server.use('/api/ingredients', IngredientRouter);

module.exports = server;