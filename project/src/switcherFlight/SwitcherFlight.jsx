import React from 'react';
import { NavLink } from 'react-router-dom';

const SwitcherFlight = () => {
  return (
    <ul className="nav-elem__list">
      <div className="nav-elem__container">
        <li className="nav-elem__item">
          <NavLink className="nav-elem__link" to={`departure`}>
            Виліт
          </NavLink>
        </li>

        <li className="nav-elem__item">
          <NavLink className="nav-elem__link" to={'arrival'}>
            Приліт
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default SwitcherFlight;
