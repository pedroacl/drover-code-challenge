import React from 'react';

const style = {
  footer: {
    backgroundColor: '#bef9f9',
    paddingLeft: '10px',
    paddingRight: '10px',
  },
  priceDetails: {
    fontSize: '0.9em',
  },
  detailsButton: {
    backgroundColor: '#50ff7d',
  },
};

function getCarPrice(car) {
  return Math.round(car.price_discount_and_deposit_schedule_hash['1'].subtotal_price_pounds);
}

const CarDetailsFooter = props => (
  <div className="d-flex flew-row justify-content-between align-items-center" style={style.footer}>
    <div className="">
      Text
    </div>
    <div className="text-right">
      <strong>
        &pound; {getCarPrice(props.car)}
      </strong> /month

      <div style={style.priceDetails}>(Monthly Vehicle Price inc. VAT)</div>
    </div>
    <div className="">
      <div className="btn" style={style.detailsButton}>See more details</div>
    </div>
  </div>
);

export default CarDetailsFooter;
