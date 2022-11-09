import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ResultRow from '../resultRow/resultRow';
import FlightsNotFound from '../FlightsNotFound/FlightsNotFound';

const ResultTable = ({ searchList }) => {
  console.log(searchList);
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
          <Route path={'/'} element={<FlightsNotFound />}></Route>
          <Route path={'departure'} element={<ResultRow searchList={searchList} />} />
          <Route path={'arrival'} element={<ResultRow searchList={searchList} />} />
        </Routes>
      </tbody>
    </table>
  );
};

export default ResultTable;
