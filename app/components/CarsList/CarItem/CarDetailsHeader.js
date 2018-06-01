import React from 'react';

const CarDetailsHeader = props => (
  <div className="d-flex flex-row justify-content-between pl-2 pr-2 pt-2 border-bottom">
    <div className="d-flex flex-column">
      <div className="font-weight-bold">
        {props.car.vehicle_make + ' ' + props.car.vehicle_model}
      </div>
      <div className="">
        Located in {props.car.postcode}
      </div>
    </div>

    Available from {props.car.available_start_date}
  </div>
);

export default CarDetailsHeader;
