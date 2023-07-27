export interface IngredientsStateI {
  ingredients: IngredientsI;
  pack: number;
}

export interface IngredientsI {
  soybean: number;
  sesame: number;
  wheat: number;
  corn: number;
}

export interface IngredientI {
  IngredientType: number;
}
