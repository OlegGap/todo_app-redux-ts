import axios from 'axios';
import {
  fetchCardsStart,
  fetchCardsSuccess,
  fetchCardsError,
} from './todoActions.js';

export const fetchCards = () => dispatch => {
  dispatch(fetchCardsStart());
  axios
    .get('http://localhost:8086/lists/')
    .then(response => {
      dispatch(fetchCardsSuccess(response.data));
    })
    .catch(error => {
      dispatch(fetchCardsError(error));
    });
};
export default {};
