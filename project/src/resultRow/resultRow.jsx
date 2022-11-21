import React from 'react';

import './resultRow.scss';

const ResultRow = ({ term, shedule, city, timeTake, name, carrierID, logo }) => {
  return (
    <tr>
      <td>{term}</td>
      <td>{shedule}</td>
      <td>{city}</td>
      <td>{timeTake}</td>
      <td>
        <img className="logo" src={logo} alt="logo" />
        {name}
      </td>
      <td>{carrierID}</td>
    </tr>
  );
};

export default ResultRow;
