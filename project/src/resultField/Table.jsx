import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getData } from '../airport.action';
import { airportList } from '../airport.selectors';
import SearchListRow from '../searchAirportList/searchListRow';
import './table.scss';

const Table = ({ getsData, searchListState }) => {
  const [currentDate, changeTime] = useState(moment().format('YYYY-MM-DD'));

  const handlerChangeDate = event => {
    event.preventDefault();
    changeTime(event.target.value);
    getsData(currentDate);
  };

  useEffect(() => {
    getsData();
  }, []);

  if (!searchListState) {
    return null;
  }

  return (
    <div className="search-result">
      <div className="search-result__table">
        <div className="search-result__navigation nav-elem">
          <ul className="nav-elem__list">
            <div className="nav-elem__container">
              <li className="nav-elem__item">
                <a className="nav-elem__link" href="">
                  Виліт
                </a>
              </li>
              <li className="nav-elem__item">
                <a className="nav-elem__link" href="">
                  Приліт
                </a>
              </li>
            </div>
          </ul>
          <div className="search-result__content result-tab ">
            <div className="result-tab">
              <div className="result-tab__calendar">
                <input onChange={handlerChangeDate} type="date" name="date" value={currentDate} />
                <div className="result-tab__dates-container">
                  <div className="result-tab__dates-yestarday"></div>
                  <div className="result-tab__dates-today"></div>
                  <div className="result-tab__dates-tomorrow"></div>
                </div>
              </div>
              <div className="result-tab__result">
                <table className="result-tab__result-table">
                  <thead>
                    <tr>
                      <th>Термінал</th>
                      <th>Розклад</th>
                      <th>Напрямок</th>
                      <th>Статус</th>
                      <th>Авіакомпанія</th>
                      <th>Рейс</th>
                    </tr>
                  </thead>
                  <tbody>
                    <SearchListRow searchAirportList={searchListState} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = state => {
  return {
    searchListState: airportList(state),
  };
};

const mapDispatch = {
  getsData: getData,
};

const connector = connect(mapState, mapDispatch);

export default connector(Table);
