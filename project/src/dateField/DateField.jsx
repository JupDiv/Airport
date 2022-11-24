import React from 'react';
import './datefield.scss';

const DateFiled = ({ onChangeDate, selectDate }) => {
  return (
    <div className="calendar-section">
      <div className="calendar-section__celendar">
        <i className="fas fa-calendar-days"></i>
        <input onChange={e => onChangeDate(null, e)} type="date" name="date" value={selectDate} />
      </div>
      <div className="calendar-section__button-container">
        <div className="calendar-section__activity-button">
          <button
            onClick={e => onChangeDate(-1, e)}
            className="calendar-section__dates-yestarday cal__button"
          >
            <span>Yestarday</span>
          </button>
        </div>
        <div className="calendar-section__activity-button">
          <button
            onClick={e => onChangeDate(0, e)}
            className="calendar-section__dates-today cal__button"
          >
            Today
          </button>
        </div>
        <div className="calendar-section__activity-button">
          <button
            onClick={e => onChangeDate(1, e)}
            className="calendar-section__dates-tomorrow cal__button"
          >
            Tomorrow
          </button>
        </div>
      </div>
    </div>
  );
};

export default DateFiled;
