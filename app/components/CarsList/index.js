import React from 'react';
import CarImages from './CarImages';
import CarDetails from './CarDetails';
import PropType from 'react-redux';

function renderCarListItem(car) {
  const carsListStyle = {
    marginBottom: '20px',
    height: '100%',
  };

  return (
    <div key={car.id} className="row border bg-white rounded" style={carsListStyle}>
      <div className="col-md-4">
        <CarImages car={car} />
      </div>

      <div className="col-md-8">
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
