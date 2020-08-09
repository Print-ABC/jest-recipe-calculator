import { Ingredient } from "./ingredients";

/**
 * Calculate and return the cost per unit of an ingredient, i.e. cost, number, cost per unit
 * @param ingredient the ingredient to calculate
 */
function calculateMeta(
  ingredient: Ingredient
): { cost: number; weight: number; costPerUnit: number } {
  const metadata = {
    cost: 0,
    weight: 0,
    costPerUnit: 0,
  };
  ingredient.recipe.madeWith.forEach((item) => {
    metadata.cost += item.ingredient.cost;
    metadata.weight += item.ingredient.weight;
  });
  metadata.cost = +metadata.cost.toFixed(2) // Set to 2 decimal places
  metadata.weight = +metadata.weight.toFixed(2)
  metadata.costPerUnit += +(metadata.cost / (metadata.weight / 1000)).toFixed(
    2
  ); // Assume one unit to be 1 kg / 1000 g
  ingredient.cost = metadata.cost;
  ingredient.weight = metadata.weight;
  return metadata;
}

export { calculateMeta };
