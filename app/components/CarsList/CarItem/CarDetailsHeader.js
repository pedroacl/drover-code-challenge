import React from 'react';

const CarDetailsHeader = props => (
  <div className="d-flex flex-row justify-content-between p-2">
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
