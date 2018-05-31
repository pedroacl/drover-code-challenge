import { createSelector } from 'reselect';

const selectHome = state => state.get('home');

const makeSelectCars = () => createSelector(
  selectHome,
  homeState => homeState.get('cars'),
);

const makeSelectTotalCars = () => createSelector(
  selectHome,
  homeState => homeState.get('totalCars'),
);

const makeSelectLoadingCars = () => createSelector(
  selectHome,
  homeState => homeState.get('loadingCars'),
);

export {
  selectHome,
  makeSelectCars,
  makeSelectTotalCars,
  makeSelectLoadingCars,
};
