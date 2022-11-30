import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
import checkFlights from '../utils/checkFlights';
import ResultRow from '../resultRow/resultRow';
import './resulttable.scss';

const ResultTable = ({ searchList, date, path }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    searchParams.set('date', date);
    setSearchParams(searchParams);
  }, [date]);

  const selectDate = searchParams.get('date');

  const airportList = checkFlights(path, searchList);
  return (
    <table className="result-table">
      <thead className="result-table__header">
        <tr className="result-table__head-row">
          <th className="result-table__head-col">Термінал</th>
          <th className="result-table__head-col">Розклад</th>
          <th className="result-table__head-col">Напрямок</th>
          <th className="result-table__head-col">Статус</th>
          <th className="result-table__head-col">Авіакомпанія</th>
          <th className="result-table__head-col">Рейс</th>
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
