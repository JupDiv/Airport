import React from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import './switcherflight.scss';

const SwitcherFlight = ({ onChangeFlightsDerictions }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectDate = searchParams.get('date') || moment().format('YYYY-MM-DD');
  const { pathname } = useLocation();

  return (
    <ul className="nav-list">
      <div className="nav-list__container">
        <li className="nav-list__item">
          <NavLink
            style={({ isActive }) => (isActive ? { zIndex: 3 } : { zIndex: 1 })}
            onClick={() => onChangeFlightsDerictions(pathname)}
            className="nav-list__link"
            to={`/departures?date=${selectDate}`}
          >
            <span className="nav-list__text">
              <i className="fas fa-plane-departure"></i>
              Виліт
            </span>
          </NavLink>
        </li>

        <li className="nav-list__item">
          <NavLink
            style={({ isActive }) => (isActive ? { zIndex: 2 } : { zIndex: 0 })}
            onClick={() => onChangeFlightsDerictions(pathname)}
            className="nav-list__link"
            to={`/arrivals?date=${selectDate}`}
          >
            <span className="nav-list__text">
              <i className="fas fa-plane-arrival"></i>
              Приліт
            </span>
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default SwitcherFlight;
