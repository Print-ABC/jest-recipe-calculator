import { chocolatePaste, chocolateBatter, chocolateCake } from "./ingredients";
import { calculateCostPerUnit } from "./calculateCostPerUnit";
import { calculateMeta } from "./calculateMeta";

chocolatePaste.cost = calculateCostPerUnit(chocolatePaste);
chocolateBatter.cost = calculateCostPerUnit(chocolateBatter);
const metadata = calculateMeta(chocolateCake);
console.log("\nChocolate paste: " + JSON.stringify(chocolatePaste));
console.log("\nChocolate batter: " + JSON.stringify(chocolateBatter));
console.log("\nChocolate cake: " + JSON.stringify(chocolateCake));
console.log("\nChocolate cake metadata is " + JSON.stringify(metadata));

console.log(
  "\nProduct: " +
    chocolateCake.name +
    "\n- Cost per kg: " +
    metadata.costPerUnit +
    "\n- Total cost: " +
    chocolateCake.cost +
    "\n- Total weight: " +
    chocolateCake.weight
);
