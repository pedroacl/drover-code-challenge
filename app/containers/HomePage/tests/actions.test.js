import { loadCars } from '../actions';
import { LOAD_CARS } from '../constants';

describe('HomePage actions', () => {
  describe('Load cars action', () => {
    it('', () => {
      const params = {};

      const expectedResponse = {
        type: LOAD_CARS,
        payload: params,
      };

      expect(loadCars(params)).toEqual(expectedResponse);
    });
  });
});
