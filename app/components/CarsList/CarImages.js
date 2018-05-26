import React from 'react';

const style = {
  paddingLeft: '0px',
  paddingRight: '0px',
};

const CarImages = props => (
    <div className="row">
      <img src={props.car.images[0].small_image_url} className="img-fluid" />
    </div>
);

export default CarImages;
