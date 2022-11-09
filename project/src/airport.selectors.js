// export const arrivalListSelector = state => {
//   return state.airportList.airportList.arrival;
// };
// export const departurelListSelector = state => {
//   return state.airportList.departure;
// };
export const airportList = state => {
  return state.searchList.airportList;
};
