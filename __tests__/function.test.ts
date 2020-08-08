import { chocolateCake } from "./../src/ingredients";
import {
  Ingredient,
  chocolatePaste,
  chocolateBatter,
} from "../src/ingredients";
import { calculateCostPerUnit } from "../src/calculateCostPerUnit";
import { calculateMeta } from "../src/calculateMeta";

describe("calculate cost per unit", () => {
  test("it should take in an Ingredient object and return a number value", () => {
    chocolatePaste.cost = calculateCostPerUnit(chocolatePaste);
    chocolateBatter.cost = calculateCostPerUnit(chocolateBatter);

    expect(chocolatePaste.cost).toBe(14);
    expect(chocolateBatter.cost).toBe(26.86);
  });
});

describe("calculate product meta data", () => {
  test("it should take in an Ingredient object and return an object", () => {
    expect(calculateMeta(chocolateCake)).toEqual({
      cost: expect.any(Number),
      weight: expect.any(Number),
      costPerUnit: expect.any(Number),
    });
  });
});
