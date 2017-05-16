import axios from 'axios';

/**
 * single discussion apis
 */
export const fetchSingleDiscussion = (discussion_slug) => {
  return axios.get(`/api/discussion/${discussion_slug}`);
};

export const toggleFavoriteApi = (discussion_id) => {
  return axios.put(`/api/discussion/toggleFavorite/${discussion_id}`);
};

export const postOpinionApi = (opinion) => {
  return axios.post('/api/opinion/newOpinion', opinion);
};

export const deletePostApi = (discussionSlug) => {
  return axios.delete(`/api/discussion/deleteDiscussion/${discussionSlug}`);
};

export const deleteOpinionApi = (opinionId) => {
  return axios.delete(`/api/opinion/deleteOpinion/${opinionId}`);
};
