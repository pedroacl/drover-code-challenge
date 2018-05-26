import React from 'react';

import CarDetailsHeader from './CarDetailsHeader';
import CarDetailsBody from './CarDetailsBody';
import CarDetailsFooter from './CarDetailsFooter';

const style = {
  height: '100%',
};

const CarDetails = props => (
  <div style={style} style={style}>
    <div className="row">
      <div className="col">
        <CarDetailsHeader car={props.car} />
      </div>
    </div>

    <hr/>

    <div className="row">
      <div className="col">
        <CarDetailsBody car={props.car} />
      </div>
    </div>

    <hr/>

    <div className="row">
      <div className="col">
        Tech specs
      </div>
    </div>

    <div className="row">
      <div className="col">
        <CarDetailsFooter car={props.car} />
      </div>
    </div>
  </div>
);

export default CarDetails;
