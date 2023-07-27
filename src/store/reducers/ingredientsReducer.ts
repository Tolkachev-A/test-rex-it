import { INGREDIENT_KEY } from '../../enums';
import { IngredientI, IngredientsStateI } from '../../interface';
import { ActionIngredientType } from '../../types/ActionIngredientType';

const initIngredientsState: IngredientsStateI = {
  ingredients: { soybean: 30, sesame: 30, wheat: 30, corn: 10 },
  // maxValueIngredient: { soybean: 40, sesame: 40, wheat: 40, corn: 10 },
  pack: 0.5,
};

// eslint-disable-next-line default-param-last
export const ingredientsReducer = (
  // eslint-disable-next-line default-param-last
  state = initIngredientsState,
  action: ActionIngredientType,
): IngredientsStateI => {
  switch (action.type) {
    case INGREDIENT_KEY.SET_INGREDIENT_VALUE:
      return {
        ...state,
        ingredients: getNewValueIngredients(action.payload),
      };
    default:
      return state;
  }
};

const getNewValueIngredients = (ingredient: IngredientI) => {
  return { soybean: 30, sesame: 30, wheat: 30, corn: 10 };
};
