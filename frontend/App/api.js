import axios from 'axios';

export const fetchForums = (forum_id) => {
  return axios.get('/api/forum');
};

export const fetchUser = () => {
  return axios.get('/api/user/getUser');
};

export const signOut = () => {
  return axios.get('/api/user/signout');
};
