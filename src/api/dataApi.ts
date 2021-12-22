import axios from 'axios';

export const URL = 'https://fyve-test.herokuapp.com/api';

const dataApi = axios.create({
  baseURL: URL,
});

export const fetchData = async () => {
  const { data } = await dataApi.get('/meeting');

  return data.data;
};

export const createData = async (newData: any) => {
  const res = await dataApi.post('/meeting', newData);
  return res.data;
};
