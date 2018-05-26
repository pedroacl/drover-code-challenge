import React from 'react';

const footerStyle = {
  backgroundColor: '#bef9f9',
  paddingLeft: '5px',
  paddingRight: '5px',
};

const CarDetailsFooter = props => (
  <div className="row" style={footerStyle}>
    <div className="col-md-4">
      {props.car.price_discount_and_deposit_schedule_hash['1'].subtotal_price_pounds}/month
    </div>
    <div className="col-md-4">
      (Monthly Vehicle Price inc. VAT)
    </div>
    <div className="col-md-4">
      <div className="btn btn-success">Btn</div>
    </div>
  </div>
);

export default CarDetailsFooter;
