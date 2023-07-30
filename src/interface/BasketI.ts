import { IngredientsStateI } from './IngredientsI';

export interface BasketStateInit {
  data: {
    [key: number]: IngredientsStateI;
  } | null;
  id: number[];
}
