import React, { useEffect } from 'react';
import { NavLink, useLocation, useSearchParams } from 'react-router-dom';
import moment from 'moment';
import './datefield.scss';

const DateFiled = ({ onChangeDate, selectDate }) => {
  const [dateParams, setDateParams] = useSearchParams();

  const currentDate = dateParams.get('date');
  return (
    <div className="calendar-section">
      <div className="calendar-section__container">
        <div className="calendar-section__celendar">
          <label htmlFor="search-date">{moment(selectDate, 'DD-MM-YYYY').format('DD/MM')}</label>
          <i className="fas fa-calendar-days"></i>
          <form>
            <input
              onChange={e => onChangeDate(null, e)}
              type="date"
              name="date"
              value={selectDate}
            />
          </form>
        </div>
        <div className="calendar-section__button-container">
          <div className="calendar-section__activity-button">
            <button
              onClick={e => onChangeDate(-1, e)}
              className={
                currentDate === moment().add(-1, 'days').format('YYYY-MM-DD')
                  ? `calendar-section__select-dates_active calendar-section__dates-button`
                  : `calendar-section__select-dates calendar-section__dates-button`
              }
            >
              <span className="calendar-section__input-button-date">
                {moment().add(-1, 'days').format('DD/MM')}
              </span>
              <span className="calendar-section__input-button-text">Вчора</span>
            </button>
          </div>
          <div className="calendar-section__activity-button">
            <button
              onClick={e => onChangeDate(0, e)}
              className={
                currentDate === moment().format('YYYY-MM-DD')
                  ? `calendar-section__select-dates_active calendar-section__dates-button`
                  : `calendar-section__select-dates calendar-section__dates-button`
              }
            >
              <span className="calendar-section__input-button-date">
                {moment().add(0, 'days').format('DD/MM')}
              </span>
              <span className="calendar-section__input-button-text">Сьогодні</span>
            </button>
          </div>
          <div className="calendar-section__activity-button">
            <button
              onClick={e => onChangeDate(1, e)}
              className={
                currentDate === moment().add(1, 'days').format('YYYY-MM-DD')
                  ? `calendar-section__select-dates_active calendar-section__dates-button`
                  : `calendar-section__select-dates calendar-section__dates-button`
              }
            >
              <span className="calendar-section__input-button-date">
                {moment().add(1, 'days').format('DD/MM')}
              </span>
              <span className="calendar-section__input-button-text">Завтра</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateFiled;
