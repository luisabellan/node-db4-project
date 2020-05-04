const express = require('express');

const Recipes = require('./recipe-model.js');

const router = express.Router();

// all recipes (without details about ingredients or steps)
router.get('/',  (req, res) => {
  
  Recipes.getRecipes()
  .then(recipes => {
    res.status(200).json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      res.status(200).json(recipe);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});

// /api/recipes/:id/shoppingList

router.get('/:id/shoppinglist', (req, res) => {
  const {id} = req.params

  Recipes.getShoppingList(id)
  .then(ingredients=>{
    if (ingredients) {
      res.status(200).json(ingredients);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }

  })
})

// /api/recipes/:id/instructions
router.get('/:id/instructions', (req, res) => {
  const {id} = req.params

  Recipes.getInstructions(id)
  .then(instructions=>{
    if (instructions) {
      res.status(200).json(instructions);
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }

  })
})



router.post('/', (req, res) => {
  const recipeData = req.body;

  Recipes.add(recipeData)
  .then(recipe => {
    res.status(201).json(recipe);
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new recipe' });
  });
});

router.post('/:id/steps', (req, res) => {
  const stepData = req.body;
  const { id } = req.params; 

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      Recipes.addStep(stepData, id)
      .then(step => {
        res.status(201).json(step);
      })
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id.' })
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to create new step' });
  });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Recipes.findById(id)
  .then(recipe => {
    if (recipe) {
      Recipes.update(changes, id)
      .then(updatedScheme => {
        res.json(updatedScheme);
      });
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id' });
    }
  })
  .catch (err => {
    res.status(500).json({ message: 'Failed to update recipe' });
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Recipes.remove(id)
  .then(deleted => {
    if (deleted) {
      res.json({ removed: deleted });
    } else {
      res.status(404).json({ message: 'Could not find recipe with given id' });
    }
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to delete recipe' });
  });
});

module.exports = router;