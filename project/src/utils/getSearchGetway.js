import moment from 'moment';
import { useSearchParams } from 'react-router-dom';

const baseUrl = 'https://api.iev.aero/api/flights';

const fetchData = async date => {
  const formatDates = moment(date || new Date()).format('DD-MM-YYYY');

  const res = await fetch(`${baseUrl}/${formatDates}`).then(response => {
    if (response.ok) {
      return response;
    }
    throw Error('we have problems with getway');
  });

  return res.json();
};

export default fetchData;
