import axios from 'axios';

export const postDiscussionApi = (discussion) => {
  return axios.post('/api/discussion/newDiscussion', discussion);
};
