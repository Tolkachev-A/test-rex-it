import { deleteItemBasket, setDataBasket } from 'store/actions';

export type ActionBasketType =
  | ReturnType<typeof setDataBasket>
  | ReturnType<typeof deleteItemBasket>;
