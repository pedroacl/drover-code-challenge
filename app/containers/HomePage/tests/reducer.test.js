import { fromJS } from 'immutable';
import { carsLoaded } from '../actions';

import reducer from '../reducer';

describe('HomePage reducer', () => {
  const initialState = fromJS({
    cars: [],
  });

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('CARS_LOADED - appends cars to the state', () => {
    const cars = [
      {
        vehicle_make: 'Audi',
      },
      {
        vehicle_make: 'BMW',
      },
    ];

    const newState = initialState.set('cars', initialState.get('cars').concat(cars));
    expect(reducer(initialState, carsLoaded(cars))).toEqual(newState);
  });
});
