"use strict";

var express = require('express');

var RecipeRouter = require('./recipes/recipe-router.js');

var server = express();
server.use(express.json());
server.use('/api/recipes', RecipeRouter);
module.exports = server;