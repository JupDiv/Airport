import React, { useState, useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import moment from 'moment';
import FlightsNotFound from '../FlightsNotFound/FlightsNotFound';
import SwitcherFlight from '../switcherFlight/SwitcherFlight';
import DateField from '../dateField/DateField';
import { getData } from '../airport.action';
import { airportList } from '../airport.selectors';
import ResultTable from '../resultTable/ResultTable';

const ResultSection = ({ getAirportList, searchList }) => {
  // const [selectDate, changeTime] = useState(moment().format('YYYY-MM-DD'));
  const [searchParams, setSearchParams] = useSearchParams();
  const { pathname } = useLocation();

  const selectDate = searchParams.get('date') || moment().format('YYYY-MM-DD');
  const selectFlight = searchParams.get('search');

  const handlerChangeDate = event => {
    event.preventDefault();
    searchParams.set('date', event.target.value);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    getAirportList(selectDate, selectFlight);
  }, [selectDate]);

  if (!searchList) {
    return null;
  }

  return (
    <div className="result-section">
      <SwitcherFlight selectDate={selectDate} />
      <DateField onChangeDate={handlerChangeDate} selectDate={selectDate} />
      {searchList.body.departure.length === 0 ? (
        <FlightsNotFound />
      ) : (
        <ResultTable
          setSearchParams={setSearchParams}
          path={pathname}
          searchList={searchList.body}
          date={selectDate}
          searchParams={searchParams}
        />
      )}
    </div>
  );
};

const mapState = state => {
  return {
    searchList: airportList(state),
  };
};

const mapDispatch = {
  getAirportList: getData,
};

const connector = connect(mapState, mapDispatch);

export default connector(ResultSection);
