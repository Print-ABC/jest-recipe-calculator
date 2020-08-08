"use strict";
exports.__esModule = true;
exports.calculateCostPerUnit = void 0;
/**
 * Calculate and return the cost per unit of an ingredient based on its recipe
 * @param ingredient the ingredient to calculate
 */
function calculateCostPerUnit(ingredient) {
    var costPerUnit = 0;
    ingredient.recipe.madeWith.forEach(function (item) {
        if (item.ingredient.hasOwnProperty("recipe") &&
            item.ingredient.cost === null) {
            costPerUnit += calculateCostPerUnit(item.ingredient);
        }
        costPerUnit += +((item.amt / item.ingredient.weight) * item.ingredient.cost).toFixed(2);
    });
    var temp = costPerUnit.toString();
    costPerUnit = +temp.slice(0, (temp.indexOf(".")) + 3); // Remove trailing numbers
    return costPerUnit;
}
exports.calculateCostPerUnit = calculateCostPerUnit;
