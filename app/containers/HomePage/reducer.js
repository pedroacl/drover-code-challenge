import { CARS_LOADED, MORE_CARS_LOADED, CLEAR_CARS_LIST } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  cars: [],
});

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case MORE_CARS_LOADED:
      return state.set('cars', state.get('cars').concat(action.payload));
    case CARS_LOADED:
      return state.set('cars', action.payload);
    default:
      return state;
  }
}
