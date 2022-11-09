import React from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';

const ResultRow = ({ searchList }) => {
  const { pathname } = useLocation();
  const { departure, arrival } = searchList;
  console.log(departure);
  const flights =
    pathname === '/departure'
      ? departure.map(flight => {
          return {
            id: flight.ID,
            term: flight.term,
            shedule: moment(flight.timeDepShedule).format('HH:mm'),
            city: flight['airportToID.city_en'],
            timeTake: moment(flight.timeTakeofFact).format('HH:mm'),
            name: flight.airline.en.name,
            carrierID: flight['carrierID.IATA']
              ? `${flight['carrierID.IATA']}${flight.fltNo}`
              : `${flight['carrierID.code']}${flight.fltNo}`,
          };
        })
      : arrival.map(flight => {
          return {
            id: flight.ID,
            term: flight.term,
            shedule: moment(flight.timeStandCalc).format('HH:mm'),
            city: flight['airportFromID.city_en'],
            timeTake: moment(flight.timeStandFact).format('HH:mm'),
            name: flight.airline.en.name,
            carrierID: flight['carrierID.IATA']
              ? `${flight['carrierID.IATA']}${flight.fltNo}`
              : `${flight['carrierID.code']}${flight.fltNo}`,
          };
        });

  // console.log(flights);
  return (
    <>
      {flights.map(flight => (
        <tr key={flight.id}>
          <td>{flight.term}</td>
          <td>{flight.shedule}</td>
          <td>{flight.city}</td>
          <td>{flight.timeTake}</td>
          <td>{flight.name}</td>
          <td>{flight.carrierID}</td>
        </tr>
      ))}
    </>
  );
};

export default ResultRow;
