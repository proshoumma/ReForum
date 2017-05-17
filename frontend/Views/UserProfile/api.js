/**
 * user profile apis
 */

import axios from 'axios';

export const fetchUserProfileApi = (userSlug) => {
  return axios.get(`/api/user/profile/${userSlug}`);
};
