const db = require('../data/db-config');

// resolves to a promise that resolves to an array of all recipes in the database.

function find() {
    return db('recipes')
}

// resolves to  Resolve to a single recipe object (or null)

function findById(id) {
    return db('recipes').where({ id }).first();
}

// Resolves to an array of all correctly ordered step for the given recipe: `[ { id: 17, recipe_name: 'Find the Holy Grail', step_number: 1, instructions: 'quest'}, { id: 18, recipe_name: 'Find the Holy Grail', step_number: 2, instructions: '...and quest'}, etc. ]`.

async function add(recipe) {
    await db('recipes').insert(recipe)
    .then(ids => {
      return findById(ids[0]);
    });
}


function remove(id) {
    return db('recipes').where({id}).first().del()

}