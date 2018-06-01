import React from 'react';

const style = {
  main: {
    padding: '10px',
  },
  availableText: {
    paddingRight: '0px',
  },
};

const CarDetailsHeader = props => (
  <div className="" style={style.main}>
    <div className="mr-auto p-2 item-hl">
      <div className="font-weight-bold">
        {props.car.vehicle_make + ' ' + props.car.vehicle_model}
      </div>
      <div className="">
        Located in {props.car.postcode}
      </div>
    </div>

    <div className="p-2 item-hl" style={style.availableText}>
      Available from {props.car.available_start_date}
    </div>
  </div>
);

export default CarDetailsHeader;
