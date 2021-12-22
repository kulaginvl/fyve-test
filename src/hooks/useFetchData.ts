import { useQuery } from 'react-query';
import * as api from '../api/dataApi';

export const useFetchData = () => {
  const query = useQuery('meeting', api.fetchData);
  return query;
};
