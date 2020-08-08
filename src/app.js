"use strict";
exports.__esModule = true;
var ingredients_1 = require("./ingredients");
var calculateCostPerUnit_1 = require("./calculateCostPerUnit");
var calculateMeta_1 = require("./calculateMeta");
ingredients_1.chocolatePaste.cost = calculateCostPerUnit_1.calculateCostPerUnit(ingredients_1.chocolatePaste);
ingredients_1.chocolateBatter.cost = calculateCostPerUnit_1.calculateCostPerUnit(ingredients_1.chocolateBatter);
var metadata = calculateMeta_1.calculateMeta(ingredients_1.chocolateCake);
console.log("\nChocolate paste: " + JSON.stringify(ingredients_1.chocolatePaste));
console.log("\nChocolate batter: " + JSON.stringify(ingredients_1.chocolateBatter));
console.log("\nChocolate cake: " + JSON.stringify(ingredients_1.chocolateCake));
console.log("\nChocolate cake metadata is " + JSON.stringify(metadata));
console.log("\nProduct: " +
    ingredients_1.chocolateCake.name +
    "\n- Cost per kg: " +
    metadata.costPerUnit +
    "\n- Total cost: " +
    ingredients_1.chocolateCake.cost +
    "\n- Total weight: " +
    ingredients_1.chocolateCake.weight);
