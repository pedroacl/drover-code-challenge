import {
  loadCars as loadCarsSaga,
  loadMoreCars as loadMoreCarsSaga,
} from '../saga';

import { put, takeLatest } from 'redux-saga/effects';

import {
  loadCars as loadCarsAction,
  loadingCars as loadingCarsAction,
  loadMoreCars as loadMoreCarsAction,
  carsLoaded as carsLoadedAction,
} from '../actions';

describe('HomePage saga', () => {
  describe('loadCars Saga', () => {
    let loadCarsGenerator;
    let putLoadingCars;
    let callLoadCars;
    let putCarsLoaded;

    const carsRes = [
      {
        title: 'car1',
      },
    ];

    beforeAll(() => {
      const params = {
        location: 'London',
      };

      loadCarsGenerator = loadCarsSaga(loadCarsAction(params));

      putLoadingCars = loadCarsGenerator.next().value;
      expect(putLoadingCars).toMatchSnapshot();

      callLoadCars = loadCarsGenerator.next().value;
      expect(callLoadCars).toMatchSnapshot();

      putCarsLoaded = loadCarsGenerator.next(carsRes).value;
      expect(putCarsLoaded).toMatchSnapshot();
    });

    it('dispatches a loading cars action', () => {
      const location = 'London';
      expect(putLoadingCars).toEqual(put(loadingCarsAction(location)));
    });

    it('dispatches a call action', () => {
      // TODO add mock
    });

    it('dispatches a cars loaded action', () => {
      expect(putCarsLoaded).toEqual(put(carsLoadedAction(carsRes)));
    });
  });

  describe('loadMoreCars Saga', () => {
    let loadMoreCarsGenerator;

    beforeEach(() => {
      const params = {
        location: 'London',
      };

      loadMoreCarsGenerator = loadMoreCarsSaga(loadMoreCarsAction(params));

      const callDescriptor = loadMoreCarsGenerator.next().value;
      expect(callDescriptor).toMatchSnapshot();
    });

    it('loads more cars', () => {

    });
  });
});
