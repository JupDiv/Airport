import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { getData } from '../airport.action';
import { airportList } from '../airport.selectors';
import SwitcherFlight from '../switcherFlight/SwitcherFlight';
import ResultTable from '../resultTable/ResultTable';
import DateFiled from '../dateField/DateField';
import './resultFieldFlight.scss';

const ResultFieldFlight = ({ getsData, searchList }) => {
  const [currentDate, changeTime] = useState(moment().format('YYYY-MM-DD'));

  const handlerChangeDate = event => {
    event.preventDefault();
    changeTime(event.target.value);
    getsData(currentDate);
  };

  useEffect(() => {
    getsData();
  }, []);

  if (!searchList) {
    return null;
  }

  console.log(searchList);
  return (
    <div className="search-result">
      <div className="search-result__table">
        <div className="search-result__navigation nav-elem">
          <SwitcherFlight />
          <div className="search-result__content result-tab ">
            <div className="result-tab">
              <DateFiled handlerChangeDate={handlerChangeDate} currentDate={currentDate} />
              <div className="result-tab__result">
                <ResultTable searchList={searchList.body} />
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
    searchList: airportList(state),
  };
};

const mapDispatch = {
  getsData: getData,
};

const connector = connect(mapState, mapDispatch);

export default connector(ResultFieldFlight);
