import React from 'react';

const Spinner = (props) => {
  let content = (<div></div>);

  const style = {
    loader: {
      border: '16px solid #f3f3f3',
      borderTop: '16px solid #3498db',
      borderRadius: '50%',
      width: '120px',
      height: '120px',
      animation: 'spin 2s linear infinite',
    }
  };

  if (props.loading) {
    content = (
      <div style={style.loader}>
        Loading
        <img src="" />
      </div>
    );
  }

  return (content);
};

export default Spinner;
