import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const renderCarImage = img => (
  <div key={img.image_url}>
    <img src={img.small_image_url} className="img-fluid" />
  </div>
);

const CarImages = props => (
  <Slider {...settings}>
    { props.car.images.map(img => renderCarImage(img)) }
  </Slider>
);

CarImages.propTypes = {
  car: PropTypes.shape(),
};

export default CarImages;
