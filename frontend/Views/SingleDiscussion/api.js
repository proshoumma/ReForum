import axios from 'axios';

/**
 * single discussion apis
 */
export const fetchSingleDiscussion = (forum_id, discussion_slug) => {
  return axios.get(`api/singleDiscussion/${forum_id}/${discussion_slug}`);
};

export const fetchOpinions = (forum_id, discussion_slug) => {
  return axios.get(`api/opinions/${forum_id}/${discussion_slug}`);
};
