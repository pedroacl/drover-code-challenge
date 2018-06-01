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

const CarDetailsBody = props => (
  <div className="d-flex flex-row flex-wrap text-secondary">
    {renderFeatures(props.car.features)}
  </div>
);

export default CarDetailsBody;
