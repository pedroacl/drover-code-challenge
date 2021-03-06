import React from 'react';
import PropTypes from 'prop-types';
import Waypoint from 'react-waypoint';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// Components
import Navbar from 'components/Navbar';
import CarsSortMenu from 'components/CarsSortMenu';
import CarsList from 'components/CarsList/Loadable';
import Spinner from 'components/Spinner';
import Footer from 'components/Footer';
import SearchForm from 'components/SearchForm';

// Containers
import { loadCars, loadMoreCars } from 'containers/HomePage/actions';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectCars,
  makeSelectLoadingCars,
  makeSelectTotalCars,
  makeSelectSearchLocation,
} from './selectors';
import saga from './saga';
import reducer from './reducer';
import styles from './styles';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.page = 1;
    this.perPage = 2;

    const params = {
      vehicle_type: 'Consumer',
      location: 'London',
      page: this.page,
      per_page: this.perPage,
    };

    this.props.loadCars(params);
  }

  handleSubmit(values) {
    this.page = 1;

    const params = {
      page: this.page,
      per_page: this.perPage,
    };

    const vals = { ...values, ...params, vehicle_type: 'Consumer' };

    this.props.loadCars(vals);
  }

  handleWaypointEnter() {
    this.page += 1;

    const params = {
      vehicle_type: 'Consumer',
      location: this.props.searchLocation,
      page: this.page,
      per_page: this.perPage,
    };

    this.props.loadMoreCars(params);
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row main-content" style={styles.mainContent}>
            <div className="col-lg-3 col-sm-12" style={styles.form}>
              <SearchForm onSubmit={values => this.handleSubmit(values)} />
            </div>

            <div className="col-lg-9">
              <div>
                <h4 className="">
                  {this.props.totalCars} Vehicles found near {this.props.searchLocation}
                </h4>
              </div>

              <div className="d-flex flex-row justify-content-end pb-2" style={styles.sortMenu}>
                <CarsSortMenu />
              </div>

              <div className="">
                <CarsList cars={this.props.cars} />
              </div>

              <Waypoint
                onEnter={() => this.handleWaypointEnter()}
                onLeave={this.handleWaypointLeave}
              >
                <div className="d-flex flew-row justify-content-center" style={styles.spinner}>
                  <Spinner loading={this.props.loadingCars} />
                </div>
              </Waypoint>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row fixed-bottom d-lg-none justify-content-center align-items-center" style={styles.refineSearch}>
          <a className="btn btn-outline-dark font-weight-bold" style={styles.refineSearchBtn}>
            Refine your search
          </a>
        </div>

        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  loadCars: PropTypes.func.isRequired,
  loadMoreCars: PropTypes.func.isRequired,
  loadingCars: PropTypes.bool.isRequired,
  totalCars: PropTypes.number.isRequired,
  searchLocation: PropTypes.string.isRequired,
};

HomePage.defaultProps = {
  cars: [],
};

const mapDispatchToProps = dispatch => ({
  loadCars: params => dispatch(loadCars(params)),
  loadMoreCars: params => dispatch(loadMoreCars(params)),
});

const mapStateToProps = createStructuredSelector({
  cars: makeSelectCars(),
  totalCars: makeSelectTotalCars(),
  loadingCars: makeSelectLoadingCars(),
  searchLocation: makeSelectSearchLocation(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
