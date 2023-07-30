import { ACTION_KEY } from 'enums';
import { BasketStateInit } from 'interface';
import { ActionBasketType } from 'types';

const basketStateInit: BasketStateInit = {
  data: null,
  id: [],
};

export const basketReducer = (
  // eslint-disable-next-line default-param-last
  state = basketStateInit,
  action: ActionBasketType,
): BasketStateInit => {
  switch (action.type) {
    case ACTION_KEY.SET_VALUE_BASKET:
      // eslint-disable-next-line no-case-declarations
      const id = Date.now();

      return {
        ...state,
        data: { ...state.data, [id]: action.payload },
        id: [...state.id, id],
      };
    case ACTION_KEY.DELETE_ITEM:
      // eslint-disable-next-line no-case-declarations
      const newData = { ...state.data };

      delete newData[action.payload];

      return {
        ...state,
        data: { ...newData },
        id: state.id.filter(id => id !== action.payload),
      };

    default:
      return state;
  }
};
