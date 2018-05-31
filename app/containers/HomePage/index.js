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
import { makeSelectCars, makeSelectLoadingCars } from './selectors';
import saga from './saga';
import reducer from './reducer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'font-awesome/css/font-awesome.min.css';


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
    const style = {
      mainContent: {
        marginTop: '56px',
        paddingTop: '20px',
        fontFamily: 'Maison-Neue-Book, Arial, sans-serif',
      },
      sortMenu: {
        paddingBottom: '10px',
      },
      form: {
        marginBottom: '20px',
      },
      spinner: {
        fontSize: '3em',
        padding: '0px',
      },
    };

    return (
      <div>
        <Navbar />
        <div className="container">
          <div className="row main-content" style={style.mainContent}>
            <div className="col-lg-3" style={style.form}>
              <SearchForm onSubmit={values => this.handleSubmit(values)} />
            </div>

            <div className="col-lg-9">
              <div className="d-flex flex-row justify-content-end" style={style.sortMenu}>
                <CarsSortMenu />
              </div>

              {this.renderCarsList()}

              <Waypoint
                onEnter={() => this.handleWaypointEnter()}
                onLeave={this.handleWaypointLeave}
              >
                <div className="d-flex flew-row justify-content-center" style={style.spinner}>
                  <Spinner loading={this.props.loadingCars} />
                </div>
              </Waypoint>
            </div>
          </div>
        </div>

        <div className="refine-search fixed-bottom d-lg-none">Refine Search</div>
        
        <Footer />
      </div>
    );
  }
}

HomePage.propTypes = {
  loadCars: PropTypes.func.isRequired,
  loadMoreCars: PropTypes.func.isRequired,
  loadingCars: PropTypes.bool.isRequired,
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
  loadingCars: makeSelectLoadingCars(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const withSaga = injectSaga({ key: 'home', saga });
const withReducer = injectReducer({ key: 'home', reducer });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
