import React from 'react';


const style = {
  main: {
  },
  description: {
    paddingRight: '10px',
  },
  menu: {
    paddingLeft: '10px',
  },
  sortIcon: {
    paddingLeft: '5px',
  },
  dropdown: {
    boxShadow: '0 8px 6px -6px rgba(0,0,0,0.15)',
  },
};

const getSortType = () => 'Price - Low to High';

const CarsSortMenu = () => (
  <div className="d-flex flex-row" style={style.main}>
    <div className="border-right" style={style.description}>
      Here
    </div>

    <div style={style.menu}>
      <div className="dropdown">
        <button
          className="dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {getSortType()}
        </button>
        <div className="dropdown-menu" style={style.dropdown}>
          <a className="dropdown-item" href="#">Price - Low to High</a>
          <a className="dropdown-item" href="#">Price - High to Low</a>
          <a className="dropdown-item" href="#">Distance - Close to Far</a>
        </div>
      </div>
    </div>
  </div>
);

export default CarsSortMenu;
