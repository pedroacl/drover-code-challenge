import {
  LOAD_CARS,
  LOADING_CARS,
  CARS_LOADED,
  LOAD_MORE_CARS,
  MORE_CARS_LOADED,
  ERROR_LOADING_CARS,
  LOAD_AUTOCOMPLETE_LOCATION,
  AUTOCOMPLETE_LOCATION_LOADED,
} from './constants';

export const loadCars = params => ({
  type: LOAD_CARS,
  payload: params,
});

export const loadingCars = () => ({
  type: LOADING_CARS,
  payload: {},
});

export const carsLoaded = cars => ({
  type: CARS_LOADED,
  payload: cars,
});

export const loadMoreCars = cars => ({
  type: LOAD_MORE_CARS,
  payload: cars,
});

export const moreCarsLoaded = cars => ({
  type: MORE_CARS_LOADED,
  payload: cars,
});

export const errorLoadingCars = err => ({
  type: ERROR_LOADING_CARS,
  payload: err,
});

export const loadAutoCompleteLocation = input => ({
  type: LOAD_AUTOCOMPLETE_LOCATION,
  payload: input,
});

export const autoCompleteLocationLoaded = location => ({
  type: AUTOCOMPLETE_LOCATION_LOADED,
  payload: location,
});
