import axios from 'axios';

/**
 * single discussion apis
 */
export const fetchSingleDiscussion = (forum_id, discussion_id) => {
  return axios.get(`/api/discussion/${forum_id}/${discussion_id}`);
};

export const fetchOpinions = (forum_id, discussion_id) => {
  return axios.get(`/api/opinion/${forum_id}/${discussion_id}`);
};
