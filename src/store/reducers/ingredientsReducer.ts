import { getNewValueIngredients } from '../../utils';

import { ACTION_KEY } from 'enums';
import { IngredientsStateI } from 'interface';
import { ActionIngredientType } from 'types';

const initIngredientsState: IngredientsStateI = {
  ingredients: { soybean: 30, sesame: 30, wheat: 30, corn: 10 },
  pack: '0.5',
};

export const ingredientsReducer = (
  // eslint-disable-next-line default-param-last
  state = initIngredientsState,
  action: ActionIngredientType,
): IngredientsStateI => {
  switch (action.type) {
    case ACTION_KEY.SET_INGREDIENT_VALUE:
      return {
        ...state,
        ingredients: getNewValueIngredients(action.payload, state.ingredients),
      };
    case ACTION_KEY.SET_PACK:
      return {
        ...state,
        pack: action.payload,
      };
    default:
      return state;
  }
};
