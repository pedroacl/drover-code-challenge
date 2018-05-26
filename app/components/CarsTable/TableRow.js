import React from 'react';

const TableRow = car => (
  <tr key={ car.id }>
    <td>{ car.maker }</td>
    <td>{ car.model }</td>
    <td>{ car.year }</td>
    <td>{ car.color }</td>
    <td>{ car.price }</td>
  </tr>
);

export default TableRow;
