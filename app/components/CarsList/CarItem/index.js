import React from 'react';

import CarDetailsHeader from './CarDetailsHeader';
import CarDetailsFooter from './CarDetailsFooter';
import CarDetailsFeatures from './CarDetailsFeatures';
import CarDetailsIcons from './CarDetailsIcons';

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
      <div className="d-flex flex-column justify-content-between align-items-stretch" style={style.detailsContent}>
        <div>
          <CarDetailsHeader car={props.car} />
        </div>
        <span className="border-bottom"/>

        <div>
          <CarDetailsIcons car={props.car} />
        </div>

        <span className="border-bottom"/>

        <div>
          <CarDetailsFeatures car={props.car} />
        </div>

        <div>
          <CarDetailsFooter car={props.car} />
        </div>
      </div>
    </div>
  </div>
);

export default CarDetails;
