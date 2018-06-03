import React from 'react';
import PropTypes from 'prop-types';

function renderFeatures(features) {
  const [first, ...rest] = features;

  const content = [(
    <div key={first}>
      { first }
    </div>
  )];

  return content.concat(rest.map(
    feature => (
      <div key={feature}>
        - {feature}
      </div>
    ),
  ));
}

const CarDetailsFeatures = props => (
  <div className="d-flex flex-row flex-wrap align-items-center pl-2 pr-2 text-secondary">
    {renderFeatures(props.car.features)}
  </div>
);

CarDetailsFeatures.propTypes = {
  car: PropTypes.shape({
    features: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default CarDetailsFeatures;
