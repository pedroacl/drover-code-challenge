import { 
  LOAD_CARS, CARS_LOADED, LOAD_MORE_CARS, MORE_CARS_LOADED, ERROR_LOADING_CARS 
} from './constants';

export const loadCars = params => ({
  type: LOAD_CARS,
  payload: params,
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
