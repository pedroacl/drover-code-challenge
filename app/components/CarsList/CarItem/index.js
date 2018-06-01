import React from 'react';

import CarDetailsHeader from './CarDetailsHeader';
import CarDetailsBody from './CarDetailsBody';
import CarDetailsFooter from './CarDetailsFooter';

import CarImages from './CarImages';

const style = {
  // height: '100%',
  images: {
    paddingLeft: '0px',
    paddingRight: '0px',
    minWidth: '230px',
  },
  details: {
    padding: '0px',
  },
};

const carsListStyle = {
  marginBottom: '20px',
  padding: '0px',
  paddingLeft: '0px',
};

const CarDetails = props => (
  <div key={props.car.id} className="row border bg-white rounded" style={carsListStyle}>
    <div className="col-md-4" style={style.images}>
      <CarImages car={props.car} />
    </div>

    <div className="col-md-8" style={style.details}>
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
    </div>
  </div>
);

export default CarDetails;
