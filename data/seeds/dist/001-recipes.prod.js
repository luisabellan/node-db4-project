"use strict";exports.seed=function(e,n){return e("recipe").truncate().then(function(){return e("recipe").insert([{name:"Traditional Spanish Paella"},{name:"Spicy Middle Eastern kofte"},{name:"Strawberry cake"}])})};