import {
  Ingredient,
  chocolatePaste,
  chocolateBatter,
  chocolateCake,
} from "../src/ingredients";
import { calculateCostPerUnit } from "../src/calculateCostPerUnit";
import { calculateMeta } from "../src/calculateMeta";

describe("calculate cost per unit", () => {
  test("calculateCostPerUnit should take in an Ingredient object and return a number value", () => {
    chocolatePaste.cost = calculateCostPerUnit(chocolatePaste);
    chocolateBatter.cost = calculateCostPerUnit(chocolateBatter);

    expect(chocolatePaste.cost).toEqual(expect.any(Number));
    expect(chocolateBatter.cost).toEqual(expect.any(Number));
  });
});

describe("calculate product meta data", () => {
  test("calculateMeta should take in an Ingredient object and return an object { cost: number, weight: number, costPerUnit: number }", () => {
    expect(calculateMeta(chocolateCake)).toEqual({
      cost: expect.any(Number),
      weight: expect.any(Number),
      costPerUnit: expect.any(Number),
    });
  });
});
