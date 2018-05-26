import React from 'react';

const style = {
  padding: '5px',
};

const CarDetailsHeader = (props) =>
  (
    <div className="row" style={style}>
      <div className="col-md-6">
        <div className="row">
          <strong>{props.car.vehicle_make + ' ' + props.car.vehicle_model}</strong>
        </div>
        <div className="row">
          Located in {props.car.postcode}
        </div>
      </div>

      <div className="col-md-6">
        Available from {props.car.available_start_date}
      </div>
    </div>
  );

export default CarDetailsHeader;
