"use strict";var db=require("../data/db-config.js");function getRecipesWithIngredient(e){return db("i.name as ingredient_name","r.name  as recipe_name").join("ingredient as i").select("i.name as ingredient_name","r.name as recipe_name").where({ingredient_id:e})}module.exports={getRecipesWithIngredient:getRecipesWithIngredient};