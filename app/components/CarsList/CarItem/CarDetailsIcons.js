import React from 'react';
import PropTypes from 'prop-types';

const CarDetailsIcons = props => (
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        Year: {props.car.year}
      </div>

      <div className="col-md-3">
        Body Info: {props.car.body_information}
      </div>

      <div className="col-md-3">
        Transmission: {props.car.transmission}
      </div>

      <div className="col-md-3">
        Fuel: {props.car.fuel}
      </div>
    </div>

    <div className="row">
      <div className="col-md-3">
        Seats: {props.car.number_seats_information}
      </div>

      <div className="col-md-3">
        Doors: {props.car.number_doors_information}
      </div>

      <div className="col-md-3">
        MPG: {props.car.mpg}
      </div>

      <div className="col-md-3">
        Color: {props.car.color}
      </div>
    </div>
  </div>
);

CarDetailsIcons.propTypes = {
  car: PropTypes.shape({
    body_information: PropTypes.string,
    color: PropTypes.string,
    fuel: PropTypes.string,
    mpg: PropTypes.number,
    number_doors_information: PropTypes.string,
    number_seats_information: PropTypes.string,
    transmission: PropTypes.string,
    year: PropTypes.number,
  }).isRequired,
};

export default CarDetailsIcons;
