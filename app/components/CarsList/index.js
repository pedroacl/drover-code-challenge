import React from 'react';
import PropTypes from 'prop-types';


import CarItem from './CarItem';

const CarsList = (props) => {
  if (props.cars.length === 0) {
    return (<div />);
  }

  return (
    <div>
      { props.cars.map(car => <CarItem key={car.id} car={car} />) }
    </div>
  );
};

export default CarsList;
