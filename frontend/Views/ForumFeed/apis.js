import axios from 'axios';

/**
 * feed apis
 */
export const fetchFeed = (forum_id) => {
  return axios.get(`api/forum/${forum_id}`);
};
