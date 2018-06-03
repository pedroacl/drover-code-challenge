import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function getAvailableStartDate(car) {
  return moment(car.available_start_date).format('Do MMMM YYYY');
}

const CarDetailsHeader = props => (
  <div className="d-flex flex-row justify-content-between p-2">
    <div className="d-flex flex-column">
      <div className="font-weight-bold">
        {`${props.car.vehicle_make}  ${props.car.vehicle_model}`}
      </div>
      <div className="">
        Located in {props.car.postcode}
      </div>
    </div>

    Available from {getAvailableStartDate(props.car)}
  </div>
);

CarDetailsHeader.propTypes = {
  car: PropTypes.shape({
    postcode: PropTypes.string,
    available_start_date: PropTypes.string,
    vehicle_make: PropTypes.string,
    vehicle_model: PropTypes.string,
  }).isRequired,
};

export default CarDetailsHeader;
