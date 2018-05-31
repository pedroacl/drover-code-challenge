import React from 'react';
import PropTypes from 'prop-types';

import CarImages from './CarImages';
import CarDetails from './CarDetails';

function renderCarListItem(car) {
  const carsListStyle = {
    marginBottom: '20px',
    padding: '0px',
    paddingLeft: '0px',
  };

  const style = {
    images: {
      paddingLeft: '0px',
      paddingRight: '0px',
      minWidth: '230px',
    },
    details: {
      padding: '0px',
    },
  };

  return (
    <div key={car.id} className="row border bg-white rounded" style={carsListStyle}>
      <div className="col-md-4" style={style.images}>
        <CarImages car={car} />
      </div>

      <div className="col-md-8" style={style.details}>
        <CarDetails car={car} />
      </div>
    </div>
  );
}

const CarsList = ({ cars }) => (
  <div>
    { cars.map(car => renderCarListItem(car)) }
  </div>
);

export default CarsList;
