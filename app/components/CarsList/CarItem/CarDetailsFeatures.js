import React from 'react';

function renderFeatures(features) {
  const [first, ...rest] = features;

  const content = [(
    <div>
      { first }
    </div>
  )];

  return content.concat(rest.map(
    feature => (
      <div>
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

export default CarDetailsFeatures;