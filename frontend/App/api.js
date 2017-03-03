import axios from 'axios';

export const fetchForums = (forum_id) => {
  return axios.get('/api/forum');
};
