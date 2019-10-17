export const Type = {
  FETCH_CARDS_START: 'FETCH_CARDS_START',
  FETCH_CARDS_SUCCESS: 'FETCH_CARDS_SUCCESS',
  FETCH_CARDS_ERROR: 'FETCH_CARDS_ERROR',

  ADD_CARD: 'ADD_CARD_SUCCESS',
  MODIFY_CARD: 'MODIFY_CARD_SUCCESS',
  REMOVE_CARD: 'REMOVE_CARD_SUCCESS',
  ADD_LIST: 'ADD_LIST',
  MODIFY_LIST: 'MODIFY_LIST',
  REMOVE_LIST: 'REMOVE_LIST',
};

export const fetchCardsStart = () => ({
  type: Type.FETCH_CARDS_START,
});

export const fetchCardsSuccess = cards => ({
  type: Type.FETCH_CARDS_SUCCESS,
  payload: { cards },
});

export const fetchCardsError = error => ({
  type: Type.FETCH_CARDS_ERROR,
  payload: { error },
});

export const addCardsStart = () => ({
  type: Type.ADD_CARDS_START,
});

export const addCardsSuccess = cards => ({
  type: Type.ADD_CARDS_SUCCESS,
  payload: { cards },
});

export const addCardsError = error => ({
  type: Type.ADD_CARDS_ERROR,
  payload: { error },
});
