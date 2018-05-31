import React from 'react';

const Spinner = (props) => {
  let content = (<div />);

  if (props.loading) {
    content = (
      <div>
        <i className="fa fa-spinner fa-spin" />
      </div>
    );
  }

  return (content);
};

export default Spinner;
