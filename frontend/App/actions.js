import { UPDATECURRENTFORUM } from './constants';

export const updateCurrentForum = (forum) => {
  return {
    type: UPDATECURRENTFORUM,
    payload: forum,
  };
};
