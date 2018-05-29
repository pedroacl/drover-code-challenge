import { LOADING_CARS, CARS_LOADED, MORE_CARS_LOADED, AUTOCOMPLETE_LOCATION_LOADED } from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  cars: [],
  loadingCars: false,
});

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_CARS:
      return state.set('loadingCars', true);
    case MORE_CARS_LOADED:
      return state.set('cars', state.get('cars').concat(action.payload))
                  .set('loadingCars', false);
    case CARS_LOADED:
      return state.set('cars', action.payload)
                  .set('loadingCars', false);
    case AUTOCOMPLETE_LOCATION_LOADED:
      return state.set('autocompleteLocation', action.payload);
    default:
      return state;
  }
}
