import React from 'react';

import './resultRow.scss';

const ResultRow = ({ term, shedule, city, timeTake, name, carrierID, logo }) => {
  return (
    <tr className="table-element">
      <td className="table-element__item">{term}</td>
      <td className="table-element__item">{shedule}</td>
      <td className="table-element__item">{city}</td>
      <td className="table-element__item">{timeTake}</td>
      <td className="table-element__item">
        <img className="logo" src={logo} alt="logo" />
        {name}
      </td>
      <td className="table-element__item">{carrierID}</td>
    </tr>
  );
};

export default ResultRow;
