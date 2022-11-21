import React from 'react';

const DateFiled = ({ onChangeDate, selectDate }) => {
  return (
    <div className="result-tab__calendar">
      <input onChange={onChangeDate} type="date" name="date" value={selectDate} />
      <div className="result-tab__dates-container">
        <div className="result-tab__dates-yestarday"></div>
        <div className="result-tab__dates-today"></div>
        <div className="result-tab__dates-tomorrow"></div>
      </div>
    </div>
  );
};

export default DateFiled;
