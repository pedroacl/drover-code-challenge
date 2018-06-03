import React from 'react';
import PropTypes from 'prop-types';

const InputField = ({ input, label, type, touched, error }) => (
  <div>
    <label className="font-weight-bold">{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} className="form-control" />
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

InputField.defaultProps = {
  label: '',
  touched: false,
  error: {},
};

InputField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.shape({}),
};

export default InputField;
