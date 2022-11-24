import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
import checkFlights from '../utils/checkFlights';
import ResultRow from '../resultRow/resultRow';

const ResultTable = ({ searchList, date, path }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set('date', date);
    setSearchParams(searchParams);
  }, [date]);

  const selectDate = searchParams.get('date');

  const airportList = checkFlights(path, searchList);
  return (
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
        <Routes>
          <Route path="/" element={<Navigate to={`departures?date=${selectDate}`} replace />} />
          <Route
            path={`${path}`}
            element={airportList.map(({ id, ...flight }) => (
              <ResultRow key={id} {...flight} />
            ))}
          />
        </Routes>
      </tbody>
    </table>
  );
};

export default ResultTable;
