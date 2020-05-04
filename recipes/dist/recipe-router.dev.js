"use strict";

var express = require('express');

var Recipes = require('./recipe-model');

var router = express.Router();
router.get('/', function (req, res) {
  Recipes.find().then(function (recipes) {
    res.json(recipes);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get recipes'
    });
  });
});
router.get('/:id', function (req, res) {
  var id = req.params.id;
  Recipes.findById(id).then(function (recipe) {
    if (recipe) {
      res.json(recipe);
    } else {
      res.status(404).json({
        message: 'Could not find recipe with given id.'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get recipes'
    });
  });
}); //stretch

router.get('/:id/steps', function (req, res) {
  var id = req.params.id;
  Recipes.findSteps(id).then(function (steps) {
    if (steps.length) {
      // console.log(steps)
      res.json(steps);
    } else {
      res.status(404).json({
        message: 'Could not find steps for given recipe'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to get steps'
    });
  });
});
router.post('/', function (req, res) {
  var recipeData = req.body;
  Recipes.add(recipeData).then(function (recipe) {
    res.status(201).json(recipe);
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new recipe'
    });
  });
});
router.post('/:id/steps', function (req, res) {
  var stepData = req.body;
  var id = req.params.id;
  Recipes.findById(id).then(function (recipe) {
    if (recipe) {
      Recipes.addStep(stepData, id).then(function (step) {
        res.status(201).json(step);
      });
    } else {
      res.status(404).json({
        message: 'Could not find recipe with given id.'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to create new step'
    });
  });
});
router.put('/:id', function (req, res) {
  var id = req.params.id;
  var changes = req.body;
  Recipes.findById(id).then(function (recipe) {
    if (recipe) {
      Recipes.update(changes, id).then(function (updatedScheme) {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({
        message: 'Could not find recipe with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to update recipe'
    });
  });
});
router["delete"]('/:id', function (req, res) {
  var id = req.params.id;
  Recipes.remove(id).then(function (deleted) {
    if (deleted) {
      res.json({
        removed: deleted
      });
    } else {
      res.status(404).json({
        message: 'Could not find recipe with given id'
      });
    }
  })["catch"](function (err) {
    res.status(500).json({
      message: 'Failed to delete recipe'
    });
  });
});
module.exports = router;