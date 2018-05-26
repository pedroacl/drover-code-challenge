import { createSelector } from 'reselect';

const selectHome = state => state.get('home');

const makeSelectCars = () => createSelector(
  selectHome,
  homeState => homeState.get('cars'),
);

export {
  selectHome,
  makeSelectCars,
};
