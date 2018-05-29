import { createSelector } from 'reselect';

const selectHome = state => state.get('home');

const makeSelectCars = () => createSelector(
  selectHome,
  homeState => homeState.get('cars'),
);

const makeSelectLoadingCars = () => createSelector(
  selectHome,
  homeState => homeState.get('loadingCars'),
);

export {
  selectHome,
  makeSelectCars,
  makeSelectLoadingCars,
};
