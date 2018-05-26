import React from 'react';
import TableRow from './TableRow';

const CarsTable = ({ cars }) => (
  <table className="table-responsive">
    <thead>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
      </tr>
    </thead>
    <tbody>
      { cars.map(car => <TableRow key={car.id} car={car} />) }
    </tbody>
  </table>
);

export default CarsTable;
