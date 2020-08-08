export interface Ingredient {
    id?: string
    name?: string
    weight?: number
    cost?: number
    recipe?: {
      id?: string
      madeWith?: {
        id: string,
        pos: number,
        amt: number,
        qty: number,
        ingredient: any
      }[]
    }
}

/**
 * `ingredients` refers to the database of ingredients that are being stored 
 * @param id unique id of an ingredient
 * @param name describes the name of the ingredient
 * @param weight will always be stored in grams
 * @param cost total cost in $, per unit of the item (1 unit of chocolate 55% costs $10, but it would weigh 1000g)
 */

export const ingredients: Ingredient[] = [
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
  },
];

/**
 * `chocolate` refers to a sample ingredient that could be inserted into the 'DB' above
 */

export const chocolate: Ingredient = {
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
export const chocolatePaste: Ingredient = {
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
        id: '2',
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
export const chocolateBatter: Ingredient = {
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

export const chocolateCake: Ingredient = {
  id: "choc-cake",
  name: "Chocolate Cake",
  weight: 0,
  cost: null,
  recipe: {
    id: "3",
    madeWith: [
      {
        id: "1",
        pos: 0,
        amt: 0,
        qty: 1,
        ingredient: chocolatePaste,
      },
      {
        id: "2",
        pos: 1,
        amt: 0,
        qty: 1,
        ingredient: chocolateBatter,
      },
    ],
  },
};