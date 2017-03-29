import axios from 'axios';

/**
 * feed apis
 */
export const fetchDiscussions = (forum_id, sortingMethod) => {
  return axios.get(`/api/forum/${forum_id}/discussions?sorting_method=${sortingMethod}`);
};

export const fetchPinnedDiscussions = (forum_id) => {
  return axios.get(`/api/forum/${forum_id}/pinned_discussions`);
};
