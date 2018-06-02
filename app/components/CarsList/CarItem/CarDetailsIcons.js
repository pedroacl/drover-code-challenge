import React from 'react';
import PropTypes from 'prop-types';

const CarDetailsIcons = props => (
  <div className="d-flex flex-row justify-content-around flex-wrap p-2">
    <div>
      Year: {props.car.year}
    </div>

    <div>
      Body Info: {props.car.body_information}
    </div>

    <div>
      Transmission: {props.car.transmission}
    </div>

    <div>
      Fuel: {props.car.fuel}
    </div>

    <div>
      Seats: {props.car.number_seats_information}
    </div>

    <div>
      Doors: {props.car.number_doors_information}
    </div>

    <div>
      MPG: {props.car.mpg}
    </div>   

    <div>
      Color: {props.car.color}
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
