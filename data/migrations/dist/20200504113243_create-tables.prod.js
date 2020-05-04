"use strict";exports.up=function(e){return e.schema.createTable("recipe",function(e){e.increments(),e.string("name",128).unique().notNullable()}).createTable("ingredient",function(e){e.increments(),e.string("name",128).notNullable(),e.float("quantity",2,2).notNullable()}).createTable("step",function(e){e.increments(),e.text("instructions").notNullable(),e.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipe").onUpdate("CASCADE").onDelete("CASCADE")}).createTable("recipe_ingredient",function(e){e.integer("recipe_id").unsigned().notNullable().references("id").inTable("recipe"),e.integer("ingredient_id").unsigned().notNullable().references("id").inTable("ingredient"),e.primary(["recipe_id","ingredient_id"])})},exports.down=function(e){return e.schema.dropTableIfExists("step").dropTableIfExists("ingredient").dropTableIfExists("recipe").dropTableIfExists("recipe_ingredient")};