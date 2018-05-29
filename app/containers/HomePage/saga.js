import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import {
  loadingCars,
  carsLoaded,
  errorLoadingCars,
  moreCarsLoaded,
  autoCompleteLocationLoaded,
} from 'containers/HomePage/actions';

import { LOAD_CARS, LOAD_MORE_CARS } from 'containers/HomePage/constants';
import { autoCompleteLocation } from './actions';

function parseParams(params) {
  if (params.subscription_start_days) {
    params.subscription_start_days = parseInt(params.subscription_start_days, 10);
  }

  if (params.number_of_weeks) {
    params.number_of_weeks = parseInt(params.number_of_weeks, 10);
  }

  if (params.max_distance) {
    params.max_distance = parseInt(params.max_distance, 10);
  }

  if (params.number_of_months) {
    params.number_of_months = parseInt(params.number_of_months, 10);
  }

  if (params.year) {
    params.year = parseInt(params.year, 10);
  }

  return params;
}

const url = 'https://app.joindrover.com/api/web/vehicles';

export function* loadCars(action) {
  try {
    const params = parseParams(action.payload);

    yield put(loadingCars());
    const cars = yield call(() => axios.post(url, params).then(res => res.data.data));
    yield put(carsLoaded(cars));
  } catch (err) {
    yield put(errorLoadingCars(err));
  }
}

export function* loadMoreCars(action) {
  try {
    const params = parseParams(action.payload);

    yield put(loadingCars());
    const cars = yield call(() => axios.post(url, params).then(res => res.data.data));
    yield put(moreCarsLoaded(cars));
  } catch (err) {
    yield put(errorLoadingCars(err));
  }
}

export function* loadAutoCompleteLocation(action) {
  try {
    const autoCompleteURL = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';
    const googleAPIKey = '';

    const params = {
      input: action.payload,
      key: googleAPIKey,
      language: 'en',
    };

    const location = yield call(() => axios.get(autoCompleteURL, params).then(res => res.data));
    yield put(autoCompleteLocationLoaded(location));
  } catch (err) {
    yield put(errorLoadingCars(err));
  }
}

function* watchLoadCars() {
  yield takeLatest(LOAD_CARS, loadCars);
}

function* watchLoadMoreCars() {
  yield takeLatest(LOAD_MORE_CARS, loadMoreCars);
}

export default function* rootSaga() {
  yield all([watchLoadCars(), watchLoadMoreCars()]);
}
