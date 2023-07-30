import { ACTION_KEY } from 'enums';
import { ChangeIngredientI, IngredientsStateI } from 'interface';

export const setIngredient = (payload: ChangeIngredientI) =>
  ({
    type: ACTION_KEY.SET_INGREDIENT_VALUE,
    payload,
  } as const);

export const setPack = (payload: string) =>
  ({
    type: ACTION_KEY.SET_PACK,
    payload,
  } as const);

export const setDataBasket = (payload: IngredientsStateI) =>
  ({
    type: ACTION_KEY.SET_VALUE_BASKET,
    payload,
  } as const);
export const deleteItemBasket = (payload: number) =>
  ({
    type: ACTION_KEY.DELETE_ITEM,
    payload,
  } as const);
