import React from 'react';
import PropTypes from 'prop-types';

import CarDetailsHeader from './CarDetailsHeader';
import CarDetailsFooter from './CarDetailsFooter';
import CarDetailsFeatures from './CarDetailsFeatures';
import CarDetailsIcons from './CarDetailsIcons';
import CarImages from './CarImages';
import styles from './styles';

const CarDetails = props => (
  <div key={props.car.id} className="row border bg-white rounded" style={styles.main}>
    <div className="col-md-4" style={styles.images}>
      <CarImages car={props.car} />
    </div>

    <div className="col-md-8" style={styles.details}>
      <div className="d-flex flex-column justify-content-between align-items-stretch" style={styles.detailsContent}>
        <div>
          <CarDetailsHeader car={props.car} />
        </div>
        <span className="border-bottom" />

        <div>
          <CarDetailsIcons car={props.car} />
        </div>

        <span className="border-bottom" />

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

CarDetails.propTypes = {
  car: PropTypes.shape().isRequired,
};

export default CarDetails;
