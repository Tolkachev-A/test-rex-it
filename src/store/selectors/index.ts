import { BasketStateInit, IngredientsI } from 'interface';
import { AppStoreType } from 'types';

export const selectIngredients = (state: AppStoreType): IngredientsI =>
  state.ingredientState.ingredients;

export const selectPack = (state: AppStoreType): string => state.ingredientState.pack;
export const selectBasketData = (state: AppStoreType): BasketStateInit =>
  state.basketState;
