import axios from 'axios';

/**
 * feed apis
 */
export const fetchDiscussions = (forum_id) => {
  return axios.get(`/api/forum/${forum_id}/discussions`);
};

export const fetchPinnedDiscussions = (forum_id) => {
  return axios.get(`/api/forum/${forum_id}/pinned_discussions`);
};
