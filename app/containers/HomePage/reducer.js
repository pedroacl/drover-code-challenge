import {
  LOADING_CARS, CARS_LOADED, LOADING_MORE_CARS, MORE_CARS_LOADED, AUTOCOMPLETE_LOCATION_LOADED 
} from './constants';
import { fromJS } from 'immutable';

const initialState = fromJS({
  cars: [],
  carsTotal: 0,
  loadingCars: false,
  searchLocation: 'London',
});

export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case LOADING_CARS:
      return state.set('loadingCars', true)
                  .set('cars', [])
                  .set('searchLocation', action.payload);
    case CARS_LOADED:
      return state.set('cars', action.payload.data)
                  .set('totalCars', action.payload.metadata.total_count)
                  .set('loadingCars', false);
    case LOADING_MORE_CARS:
      return state.set('loadingCars', true)
                  .set('searchLocation', action.payload);
    case MORE_CARS_LOADED:
      return state.set('cars', state.get('cars').concat(action.payload))
                .set('loadingCars', false);
    case AUTOCOMPLETE_LOCATION_LOADED:
      return state.set('autocompleteLocation', action.payload);
    default:
      return state;
  }
}
