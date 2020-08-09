# Jest demo: Recipe Calculator

Technical coding assignment given by [Hackwagon Academy](https://hackwagon.com/) for junior frontend developer job

Purpose of project is to demonstrate basic knowledge of [Jest](https://jestjs.io/) testing framework.

## Getting Started
To compile and run scripts to display outputs:
```bash
npm run build
npm start
# or
tsc ./src/*.ts
node ./src/app
```

To run Jest test files:
```bash
npm test
```

## Given Scenario

### Your objective:
You are now writing an application to help a pastry factory manage the storage of their ingredients. By having an application that aids in tracking the ingredients, the factory is able to manage their costs better. The expected use case of this client is for them to calculate the `cost per kg`, `total cost`, and `total weight` of a `product`.

### Definitions:
`ingredient`: defined as a raw ingredient in its simplest form. `Water` is a raw ingredient
`recipe`: defined as an ingredient which is created by other ingredients. Also referred to as a composite ingredient.

For e.g. Mushroom + Egg = Egg Paste (which is a ingredient that has a recipe)

Adding further, Egg Paste + Oil = Omelette (which is a product)
`product`: a product can be created as a result of a combination of raw `ingredients`, or `recipes`.

### Expected Output:
Write 2 testable functions, `calculateCostPerUnit`, `calculateMeta`. Both functions should be able to return the required results described below, for an ingredient which could either be 'raw', or 'recipe', or even 'product'

1) `calculateCostPerUnit(ingredient: Ingredient)`: returns number.
2) `calculateMeta(ingredient: Ingredient)`: returns `{cost: number, weight: number, costPerUnit: number}` Hint: Some of these functions should be reusable to allow you to perform the nested calculations
3) Calculate for us the total cost of a chocolate cake, which is the combination of chocolateBatter + chocolatePaste

### Requirements: 
1) Use Jest to write tests, feel free to write as many tests as you feel would help you accurately address the corner cases. That being said, you should minimally have 2 to cover the required expected output.
2) Use any language of your choice to solve this

### Hint/Formula:
1) Cost Per KG = Total Cost($) / Total Weight (g) / 1000
2) See below for a list of all data structures involved
3) See below for comments

```tsx
/**
 * `ingredients` refers to the database of ingredients that are being stored 
 * @param id unique id of an ingredient
 * @param name describes the name of the ingredient
 * @param weight will always be stored in grams
 * @param cost total cost in $, per unit of the item (1 unit of chocolate 55% costs $10, but it would weigh 1000g)
 */

const ingredients = [
  {
    id: '1',
    name: 'Chocolate 55%',
    weight: 1000,
    cost: 10,
  },
  {
    id: '2',
    name: 'Water',
    weight: 1000,
    cost: 0,
  },
  {
    id: '3',
    name: 'Sugar',
    weight: 1500,
    cost: 10,
  },
  {
    id: '4',
    name: 'Egg',
    weight: 50,
    cost: 10,
  }
];

/**
 * `chocolate` refers to a sample ingredient that could be inserted into the 'DB' above
 */

const chocolate = {
  id: 'choc',
  name: 'Chocolate',
  weight: 1300,
  cost: 14,
}

/**
 * `chocolatePaste` refers to an ingredient that was created by other raw ingredients (defined in the DB)
 * it takes on a structure where it would have a `null` cost, because you are unable to determine the cost of a composite ingredient except by calculating its constituents
 * `recipe` refers to the fact that this such ingredient has a recipe, and such is a "composite ingredient", not a "raw ingredient"
 * `madeWith` refers to the ingredients with which constitutes this recipe, and the respective amounts utillised in the recipe
 */
const chocolatePaste = {
  id: 'choc-paste',
  name: 'Chocolate Paste',
  weight: 1300,
  cost: null,
  recipe: {
    id: '1',
    madeWith: [
      {
        id: '1',
        pos: 0,
        amt: 1000,
        qty: 1,
        ingredient: ingredients[0]
      },
      {
        id: '2',
        pos: 1,
        amt: 1000,
        qty: 1,
        ingredient: ingredients[1]
      },
      {
        id: '3',
        pos: 2,
        amt: 600,
        qty: 1,
        ingredient: ingredients[2]
      }
    ]
  }
}

/**
 * `chocolatePaste` refers to an ingredient that was created by other raw ingredients (defined in the DB)
 * however, this ingredient ALSO uses chocolatePaste defined above, which is NOT a raw ingredient
 */
const chocolateBatter = {
  id: 'choc-batter',
  name: 'Chocolate Batter',
  weight: 1300,
  cost: null,
  recipe: {
    id: '2',
    madeWith: [
      {
        id: '1',
        pos: 0,
        amt: 2000,
        qty: 1,
        ingredient: chocolatePaste
      },
      {
        id: '2',
        pos: 0,
        amt: 1000,
        qty: 1,
        ingredient: ingredients[1]
      },
      {
        id: '3',
        pos: 0,
        amt: 500,
        qty: 1,
        ingredient: ingredients[2]
      },
      {
        id: '4',
        pos: 0,
        amt: 10,
        qty: 1,
        ingredient: ingredients[3]
      },
    ]
  }
}

const chocolateCake = {
  // ?...
}

export { };
```

