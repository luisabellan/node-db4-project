exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('recipe_ingredient').truncate()
    .then(function () {
      // add data into insert
      return knex('recipe_ingredient').insert([
        {
          ingredient_id: 1,
          recipe_id: 1,
        },
        {
          ingredient_id: 2,
          recipe_id: 1,
        },
        {
          ingredient_id: 3,
          recipe_id: 1,
        },
        {
          ingredient_id: 4,
          recipe_id: 1,
        },
        {
          ingredient_id: 5,
          recipe_id: 1,
        },
        {
          ingredient_id: 6,
          recipe_id: 1,
        },
        {
          ingredient_id: 7,
          recipe_id: 1,
        },
        {
          ingredient_id: 8,
          recipe_id: 1,
        },
        {
          ingredient_id: 9,
          recipe_id: 2,
        },
        {
          ingredient_id: 10,
          recipe_id: 2,
        },
        {
          ingredient_id: 11,
          recipe_id: 2,
        },
        {
          ingredient_id: 12,
          recipe_id: 2,
        },
        {
          ingredient_id: 13,
          recipe_id: 2,
        },
        {
          ingredient_id: 14,
          recipe_id: 2,
        },
        {
          ingredient_id: 15,
          recipe_id: 2,
        },
        {
          ingredient_id: 16,
          recipe_id: 3,
        },
        {
          ingredient_id: 17,
          recipe_id: 3,
        },
        {
          ingredient_id: 18,
          recipe_id: 3,
        },
        {
          ingredient_id: 19,
          recipe_id: 3,
        },
        {
          ingredient_id: 20,
          recipe_id: 3,
        },
        {
          ingredient_id: 21,
          recipe_id: 3,
        },
        {
          ingredient_id: 22,
          recipe_id: 3,
        },


      ]);
    });




};