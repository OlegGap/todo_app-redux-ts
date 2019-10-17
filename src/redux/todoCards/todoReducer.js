import { combineReducers } from 'redux';
import { Type } from './todoActions';

const cardsReducer = (state = [], { type, payload }) => {
  switch (type) {
    case Type.FETCH_CARDS_SUCCESS:
      return payload.cards;

    case Type.REMOVE_CARD_SUCCESS:
      return state.filter(item => item.id !== payload.id);

    case Type.ADD_CARD_SUCCESS:
      return [...state, payload.cards];

    // case Type.MODIFY_CARD_SUCCESS:
    //   return [...state, payload.post];

    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case Type.FETCH_CARDS_ERROR:
      return payload.error;

    // case Type.FETCH_CARDS_ERROR:
    //   return payload.error;

    default:
      return state;
  }
};

export default combineReducers({
  lists: cardsReducer,
  error: errorReducer,
});
