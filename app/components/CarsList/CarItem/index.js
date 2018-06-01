import React from 'react';

import CarDetailsHeader from './CarDetailsHeader';
import CarDetailsBody from './CarDetailsBody';
import CarDetailsFooter from './CarDetailsFooter';

import CarImages from './CarImages';

const style = {
  // height: '100%',
  main: {
    marginBottom: '20px',
    padding: '0px',
    paddingLeft: '0px',
    height: '100%',
  },
  images: {
    paddingLeft: '0px',
    paddingRight: '0px',
    minWidth: '230px',
  },
  details: {
    paddingLeft: '0px',
    paddingRight: '0px',
  },
  detailsContent: {
    height: '100%',
  },
};

const CarDetails = props => (
  <div key={props.car.id} className="row border bg-white rounded" style={style.main}>
    <div className="col-md-4" style={style.images}>
      <CarImages car={props.car} />
    </div>

    <div className="col-md-8" style={style.details}>
      <div className="d-flex flex-column justify-content-between" style={style.detailsContent}>
          <CarDetailsHeader car={props.car} />

        <div className="border-bottom pl-2 pr-2">
          <CarDetailsBody car={props.car} />
        </div>

        <div className="pl-2 pr-2">
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
