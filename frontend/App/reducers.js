import {
  START_FETCHING_FORUMS,
  STOP_FETCHING_FORUMS,
  FETCHING_FORUMS_SUCCESS,
  FETCHING_FORUMS_FAILURE,
  UPDATECURRENTFORUM,
  FETCHING_USER_SUCCESS,
  FETCHING_USER_FAILURE,
  SIGNOUT_USER_SUCCESS,
  SIGNOUT_USER_FAILURE,
} from './constants';

const initialState = {
  fetchingForums: false,
  forums: null,
  currentForum: 'general',
  error: false,
};

/**
 * reducer for top level app state
 */
export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case START_FETCHING_FORUMS:
      return Object.assign({}, state, {
        fetchingForums: true,
      });;

    case STOP_FETCHING_FORUMS:
      return Object.assign({}, state, {
        fetchingForums: false,
      });;

    case FETCHING_FORUMS_SUCCESS:
      return Object.assign({}, state, {
        forums: action.payload,
        fetchingForums: false,
        error: false,
      });

    case FETCHING_FORUMS_FAILURE:
      return Object.assign({}, state, {
        fetchingForums: false,
        error: 'Unable to fetch forums',
      });

    case UPDATECURRENTFORUM:
      return Object.assign({}, state, {
        currentForum: action.payload,
      });

    default:
      return state;
  }
};

/**
 * reducer for user
 */
const initialUserState = {
  authenticated: false,
  error: null,
  _id: null,
  name: null,
  email: null,
  username: null,
  avatarUrl: null,
  githubUrl: null,
  githubLocation: null,
  githubBio: null,
};

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      const {
        _id,
        name,
        username,
        avatarUrl,
        email,
        githubBio,
        githubUrl,
        githubLocation,
      } = action.payload;

      return Object.assign({}, state), {
        authenticated: true,
        error: null,
        _id,
        name,
        username,
        avatarUrl,
        email,
        githubBio,
        githubUrl,
        githubLocation,
      };

    case FETCHING_USER_FAILURE:
      return Object.assign({}, initialUserState, {
        error: 'Error while fetching user!',
      });

    case SIGNOUT_USER_SUCCESS:
      return initialUserState;

    case SIGNOUT_USER_FAILURE:
      return Object.assign({}, state, {
        error: 'Error while signing out user',
      });

    default:
      return state;
  }
};
