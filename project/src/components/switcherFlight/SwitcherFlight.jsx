import React, { useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import './switcherflight.scss';

const SwitcherFlight = ({ onChangeFlightsDerictions, selectDate, date }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  // useEffect(() => {
  //   searchParams.set('date', selectDate);
  //   setSearchParams(searchParams);
  // }, [selectDate]);

  const changedOne = {
    zIndex: 3,
    backgroundColor: '#1eb7ee',
    color: '#fff',
  };

  // const changedTwo = {
  //   zIndex: 2,
  //   backgroundColor: '#fff',
  //   color: '#1eb7ee',
  // };

  return (
    <ul className="nav-list">
      <div className="nav-list__container">
        <li className="nav-list__item">
          <NavLink
            style={({ isActive }) => (isActive ? changedOne : undefined)}
            onClick={() => onChangeFlightsDerictions(pathname)}
            className="nav-list__link"
            to={`/departures?date=${selectDate}`}
          >
            <i className="fas fa-plane-departure nav-list__icon"></i>
            <span className="nav-list__text">Виліт</span>
          </NavLink>
        </li>

        <li className="nav-list__item">
          <NavLink
            style={({ isActive }) => (isActive ? changedOne : undefined)}
            onClick={() => onChangeFlightsDerictions(pathname)}
            className="nav-list__link"
            to={`/arrivals?date=${selectDate}`}
          >
            <i className="fas fa-plane-arrival nav-list__icon"></i>
            <span className="nav-list__text">Приліт</span>
          </NavLink>
        </li>
      </div>
    </ul>
  );
};

export default SwitcherFlight;
