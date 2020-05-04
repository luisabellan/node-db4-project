exports.seed = function (knex, Promise) {
  // we want to remove all data before seeding
  // truncate will reset the primary key each time
  return knex("step")
    .truncate()
    .then(function () {
      // add data into insert
      return knex("step").insert([
        {
          instructions:
            "To prepare the herb blend, combine the first 4 ingredients, and set aside.",
          recipe_id: 1,
        },
        {
          instructions:
            "To prepare paella, combine water, saffron, and broth in a large saucepan. Bring to a simmer (do not boil). Keep warm over low heat. Peel and devein shrimp, leaving tails intact; set aside.",
          recipe_id: 1,
        },
        {
          instructions:
            "Heat 1 tablespoon oil in a large paella pan or large skillet over medium-high heat. Add chicken; saute 2 minutes on each side. Remove from pan. Add sausage and prosciutto; saute 2 minutes. Remove from pan. Add shrimp, and saute 2 minutes. Remove from pan. Reduce heat to medium-low. Add onion and bell pepper; saute 15 minutes, stirring occasionally. Add tomatoes, paprika, and 3 garlic cloves; cook 5 minutes. Add rice; cook 1 minute, stirring constantly. Stir in herb blend, broth mixture, chicken, sausage mixture, and peas. Bring to a low boil; cook 10 minutes, stirring frequently. Add mussels to pan, nestling them into rice mixture. Cook 5 minutes or until shells open; discard any unopened shells. Arrange shrimp, heads down, in rice mixture, and cook 5 minutes or until shrimp are done. Sprinkle with 1/4 cup lemon juice. Remove from heat; cover with a towel, and let stand 10 minutes. Serve with lemon wedges, if desired.",
          recipe_id: 1,
        },
        {
          instructions:
            "Preheat the oven to 180C/350F/Gas 4. Alternatively, light the barbecue.",

          recipe_id: 2,
        },
        {
          instructions:
            "For the kofte, mix together all of the kofte ingredients in a large mixing bowl until well combined, using your hands.",
          recipe_id: 2,
        },
        {
          instructions:
            "Divide the kofta mixture into 16 equal portions and roll each into a small sausage shape. Place the kofte onto a non-stick baking tray and cook for 10-12 minutes, or until completely cooked through.",
          recipe_id: 2,
        },
        {
          instructions:
            "Meanwhile, for the glaze, pour the honey and pomegranate molasses into a small pan and heat gently until warmed through. Keep warm.",
          recipe_id: 2,
        },
        {
          instructions:
            "Remove the kofte from the oven, spear each one straight through the middle with a cocktail stick and arrange on a serving platter. Lightly brush the kofte with the warm glaze and sprinkle over the pomegranate seeds. Serve immediately.",
          recipe_id: 2,
        },
        {
          instructions:
            "Butter and line the bases of three 18cm cake tins. Heat the oven to 180C/160C fan/gas 4. Blend the butter and sugar in a food processor until smooth and creamy. Add the eggs, flour and yogurt and blend again. Add 200g strawberries (save the best ones to decorate) and the vanilla. Blend once more, until the mixture is well combined.",
          recipe_id: 3,
        },
        {
          instructions:
            "Divide the cake batter evenly between the three cake tins. Spread and smooth the tops with a spatula, then bake for 25-30 mins, until the cakes have risen and a skewer inserted into the centre comes out clean. Return to the oven for another 5 mins if any wet mixture clings to the skewer. Leave in the tins for 5 mins, then turn onto a wire rack and leave to cool completely. The cakes can be made up to two days before icing, or frozen for two months.",
          recipe_id: 3,
        },
        {
          instructions:
            "For the icing, blend the butter and half the sugar until smooth and creamy, add the soft cheese and the remaining sugar and blend again. Be careful not to over mix as the icing will become runny. (If you do overmix, don’t worry – keep mixing with an electric whisk and it’ll thicken back up).",
          recipe_id: 3,
        },
        {
          instructions:
            "Layer the cakes with the jam and half the icing. Invert the final cake on top, so the base of the cake it now the top, giving you a flat surface. Pile the rest of the icing on top of the cake, using a palette knife to spread the icing over the top and down the sides. Save a little icing to pipe rosettes around the edge of the cake, if you like. Top with the remaining strawberries. Can be made up to a day ahead of serving, keep somewhere cool or in the fridge. Will keep for three days",
          recipe_id: 3,
        },
      ]);
    });
};
