import React from 'react';
import PropTypes from 'prop-types';
import Navbar from 'components/Navbar';
import CarsList from 'components/CarsList/Loadable';
import Footer from 'components/Footer';
import SearchForm from 'components/SearchForm';
import { loadCars, loadMoreCars } from 'containers/HomePage/actions';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCars } from './selectors';
import injectSaga from 'utils/injectSaga';
import saga from './saga';
import reducer from './reducer';
import injectReducer from 'utils/injectReducer';
import Waypoint from 'react-waypoint';

import 'bootstrap/dist/css/bootstrap.min.css';

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
      location: 'London',
      page: this.page,
      per_page: this.perPage,
    };

    this.props.loadMoreCars(params);
  }

  renderCarsList() {
    if (this.props.cars) {
      return (
        <CarsList cars={this.props.cars} />
      );
    }

    return (<div />);
  }

  render() {
    const mainContentStyle = {
      marginTop: '56px',
      paddingTop: '20px',
      fontFamily: 'Maison-Neue-Bold',
    };

    const formStyle = {
      marginBottom: '20px',
    };

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row main-content" style={mainContentStyle}>
            <div className="col-md-3" style={formStyle}>
              <SearchForm onSubmit={values => this.handleSubmit(values)} />
            </div>

            <div className="col-md-9">
              {this.renderCarsList()}

              <Waypoint
                onEnter={() => this.handleWaypointEnter()}
                onLeave={this.handleWaypointLeave}
              />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  loadCars: PropTypes.func.isRequired,
  loadMoreCars: PropTypes.func.isRequired,
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
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
