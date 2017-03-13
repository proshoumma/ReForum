import axios from 'axios';

/**
 * single discussion apis
 */
export const fetchSingleDiscussion = (discussion_slug) => {
  return axios.get(`/api/discussion/${discussion_slug}`);
};
