import React from 'react';

const renderInputField = ({ name, input, label, type, touched, error }) => (
  <div>
    <label className="font-weight-bold">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

export default renderInputField;
