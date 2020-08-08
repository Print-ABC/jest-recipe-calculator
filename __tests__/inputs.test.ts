import {
  Ingredient,
  chocolatePaste,
  chocolateBatter,
  chocolateCake,
} from "../src/ingredients";

test("Ingredient object property test", () => {
  const testIngredient: Ingredient = {
    id: "choc",
    name: "Chocolate",
    weight: 1300,
    cost: 14,
  };
  expect(testIngredient).toHaveProperty("id");
  expect(testIngredient).toHaveProperty("name");
  expect(testIngredient).toHaveProperty("weight");
  expect(testIngredient).toHaveProperty("cost");
});

test("chocolate paste object property test", () => {
  expect(chocolatePaste).toHaveProperty("id");
  expect(chocolatePaste).toHaveProperty("name");
  expect(chocolatePaste).toHaveProperty("weight");
  expect(chocolatePaste).toHaveProperty("cost");
  expect(chocolatePaste).toHaveProperty("recipe");
});
test("chocolate batter object property test", () => {
  expect(chocolateBatter).toHaveProperty("id");
  expect(chocolateBatter).toHaveProperty("name");
  expect(chocolateBatter).toHaveProperty("weight");
  expect(chocolateBatter).toHaveProperty("cost");
  expect(chocolateBatter).toHaveProperty("recipe");
});
test("chocolate cake object property test", () => {
  expect(chocolateCake).toHaveProperty("id");
  expect(chocolateCake).toHaveProperty("name");
  expect(chocolateCake).toHaveProperty("weight");
  expect(chocolateCake).toHaveProperty("cost");
  expect(chocolateCake).toHaveProperty("recipe");
});
