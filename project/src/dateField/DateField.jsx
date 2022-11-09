import React from 'react';

const DateFiled = ({ handlerChangeDate, currentDate }) => {
  return (
    <div className="result-tab__calendar">
      <input onChange={handlerChangeDate} type="date" name="date" value={currentDate} />
      <div className="result-tab__dates-container">
        <div className="result-tab__dates-yestarday"></div>
        <div className="result-tab__dates-today"></div>
        <div className="result-tab__dates-tomorrow"></div>
      </div>
    </div>
  );
};

export default DateFiled;
