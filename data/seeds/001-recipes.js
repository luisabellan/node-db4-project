exports.seed = function(knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex('recipe').truncate()
    .then(function () {
      // add data into insert
      return knex('recipe').insert([
        { name: 'Traditional Spanish Paella' },
        { name: 'Spicy Middle Eastern kofte'},
        { name: 'Strawberry cake'},
      ]);
    });
  
  
  
  
};