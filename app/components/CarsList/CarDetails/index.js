import React from 'react';

import CarDetailsHeader from './CarDetailsHeader';
import CarDetailsBody from './CarDetailsBody';
import CarDetailsFooter from './CarDetailsFooter';

const style = {
  height: '100%',
};

const CarDetails = props => (
  <div className="d-flex flex-column justify-content-between" style={style} >
    <div>
      <CarDetailsHeader car={props.car} />
    </div>

    <div>
      <CarDetailsBody car={props.car} />
    </div>

    <div>
        Tech specs
    </div>

    <div>
      <CarDetailsFooter car={props.car} />
    </div>
  </div>
);

export default CarDetails;
