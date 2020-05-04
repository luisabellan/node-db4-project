
exports.up = function(knex) {
  return knex.schema
    .createTable('recipe', tbl => {
      tbl.increments()
      tbl.string('name', 128)
        .unique()
        .notNullable()
    })
    .createTable('ingredient', tbl => {
      
      tbl.increments()
      tbl.string('name', 128)
        .notNullable()
      
      tbl.float('quantity', 2, 2)
        .notNullable()
    })
    .createTable('step', tbl => {
      tbl.increments()
      
      tbl.text('instructions')
        .notNullable()
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })

  .createTable('recipe_ingredient', tbl => {
  tbl.integer('recipe_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist already
    .inTable('recipe')
  tbl.integer('ingredient_id')
    .unsigned()
    .notNullable()
    .references('id')
    // this table must exist already
    .inTable('ingredient')

  // the combination of the two keys becomes our primary key
  // will enforce unique combinations of ids
  tbl.primary(['recipe_id', 'ingredient_id']);
});
  

  
  
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('step')
    .dropTableIfExists('ingredient')
    .dropTableIfExists('recipe')
    .dropTableIfExists('recipe_ingredient')
}
