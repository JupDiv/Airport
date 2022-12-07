import React, { useEffect } from 'react';
import { Route, Routes, Navigate, useSearchParams } from 'react-router-dom';
import checkFlights from '../../utils/checkFlights';
import ResultRow from '../resultRow/resultRow';
import './resulttable.scss';

const textHeadTable = [
  { id: 1, name: 'Термінал' },
  { id: 2, name: 'Розклад' },
  { id: 3, name: 'Напрямок' },
  { id: 4, name: 'Статус' },
  { id: 5, name: 'Авіакомпанія' },
  { id: 6, name: 'Рейс' },
];

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
          {textHeadTable.map(({ id, name }) => (
            <th key={id} className="result-table__head-col">
              {name}
            </th>
          ))}
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
