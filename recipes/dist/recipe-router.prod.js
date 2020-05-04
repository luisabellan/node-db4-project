"use strict";var express=require("express"),Recipes=require("./recipe-model"),router=express.Router();router.get("/",function(e,t){Recipes.find().then(function(e){t.json(e)}).catch(function(e){t.status(500).json({message:"Failed to get recipes"})})}),router.get("/:id",function(e,t){var s=e.params.id;Recipes.findById(s).then(function(e){e?t.json(e):t.status(404).json({message:"Could not find recipe with given id."})}).catch(function(e){t.status(500).json({message:"Failed to get recipes"})})}),router.get("/:id/steps",function(e,t){var s=e.params.id;Recipes.findSteps(s).then(function(e){e.length?t.json(e):t.status(404).json({message:"Could not find steps for given recipe"})}).catch(function(e){t.status(500).json({message:"Failed to get steps"})})}),router.post("/",function(e,t){var s=e.body;Recipes.add(s).then(function(e){t.status(201).json(e)}).catch(function(e){t.status(500).json({message:"Failed to create new recipe"})})}),router.post("/:id/steps",function(e,t){var s=e.body,n=e.params.id;Recipes.findById(n).then(function(e){e?Recipes.addStep(s,n).then(function(e){t.status(201).json(e)}):t.status(404).json({message:"Could not find recipe with given id."})}).catch(function(e){t.status(500).json({message:"Failed to create new step"})})}),router.put("/:id",function(e,t){var s=e.params.id,n=e.body;Recipes.findById(s).then(function(e){e?Recipes.update(n,s).then(function(e){t.json(e)}):t.status(404).json({message:"Could not find recipe with given id"})}).catch(function(e){t.status(500).json({message:"Failed to update recipe"})})}),router.delete("/:id",function(e,t){var s=e.params.id;Recipes.remove(s).then(function(e){e?t.json({removed:e}):t.status(404).json({message:"Could not find recipe with given id"})}).catch(function(e){t.status(500).json({message:"Failed to delete recipe"})})}),module.exports=router;