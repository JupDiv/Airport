import React from 'react';
import { NavLink } from 'react-router-dom';

const SwitcherFlight = ({ selectDate }) => {
  return (
    <ul className="nav-elem__list">
      <div className="nav-elem__container">
        <li className="nav-elem__item">
          <NavLink className="nav-elem__link" to={`/departures?date=${selectDate}`}>
            Виліт
          </NavLink>
        </li>

        <li className="nav-elem__item">
          <NavLink className="nav-elem__link" to={`/arrivals?date=${selectDate}`}>
            Приліт
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default SwitcherFlight;
