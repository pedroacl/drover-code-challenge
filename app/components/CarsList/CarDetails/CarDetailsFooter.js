import React from 'react';
import PropTypes from 'prop-types';

const style = {
  footerStyle: {
    backgroundColor: '#bef9f9',
    paddingLeft: '5px',
    paddingRight: '5px',
    display: 'flex',
    alignItems: 'center',
  },
  priceDetails: {
    fontSize: '0.9em',
  },
};

function getCarPrice(car) {
  return Math.round(car.price_discount_and_deposit_schedule_hash['1'].subtotal_price_pounds);
}

const CarDetailsFooter = props => (
  <div className="row" style={style.footerStyle}>
    <div className="col-md-4" />
    <div className="col-md-4  text-center">
      <strong>
        {getCarPrice(props.car)}
      </strong>/month

      <div style={style.priceDetails}>(Monthly Vehicle Price inc. VAT)</div>
    </div>
    <div className="col-md-4">
      <div className="btn btn-success">See more details</div>
    </div>
  </div>
);

CarDetailsFooter.propTypes = {
  car: PropTypes.shape.isRequired,
};

export default CarDetailsFooter;
