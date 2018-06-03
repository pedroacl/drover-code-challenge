import React from 'react';
import { PropTypes } from 'prop-types';

const renderOption = (props) => {
  const { value, label } = props;

  return (
    <option key={value} value={value}>
      {label}
    </option>
  );
};

renderOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const SelectField = ({ input, label, touched, error, options }) => (
  <div>
    <label className="font-weight-bold">{label}</label>
    <div>
      <select {...input} placeholder={label} type="select" className="form-control">
        {(options).map(option => renderOption(option))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
);

SelectField.defaultProps = {
  input: 'select',
  label: '',
  touched: false,
  error: {},
};

SelectField.propTypes = {
  input: PropTypes.shape().isRequired,
  label: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.shape(),
  options: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default SelectField;
