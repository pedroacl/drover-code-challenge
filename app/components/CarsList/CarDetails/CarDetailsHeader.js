import React from 'react';

const style = {
  main: {
    padding: '10px',
  },
  availableText: {
    paddingRight: '0px',
  },
};

const CarDetailsHeader = (props) =>
  (
    <div className="row" style={style.main}>
      <div className="col-md-6">
        <div className="row font-weight-bold">
          {props.car.vehicle_make + ' ' + props.car.vehicle_model}
        </div>
        <div className="row">
          Located in {props.car.postcode}
        </div>
      </div>

      <div className="col-md-6 text-right" style={style.availableText}>
        Available from {props.car.available_start_date}
      </div>
    </div>
  );

export default CarDetailsHeader;
