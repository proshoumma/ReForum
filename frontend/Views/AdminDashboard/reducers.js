import {
  GET_ALL_INFO_START,
  GET_ALL_INFO_SUCCESS,
  GET_ALL_INFO_FAILURE,

  GET_FORUMS,
  GET_FORUMS_SUCCESS,
  GET_FORUMS_FAILURE,

  CREATE_FORUM,
  CREATE_FORUM_SUCCESS,
  CREATE_FORUM_FAILURE,

  DELETE_FORUM,
  DELETE_FORUM_SUCCESS,
  DELETE_FORUM_FAILURE,
} from './constants';

const initialState = {
  loadingInfo: false,
  info: null,
  error: null,

  forums: [],
  gettingForums: false,
  gettingForumsError: null,

  creatingForum: false,
  creatingForumError: null,

  deletingForum: false,
  deletingForumError: null,
};

export const adminInfoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INFO_START:
      return Object.assign({}, state, {
        loadingInfo: true,
        error: null,
      });

    case GET_ALL_INFO_SUCCESS:
      return Object.assign({}, state, {
        info: action.payload,
        error: null,
      });

    case GET_FORUMS:
      return Object.assign({}, state, {
        gettingForums: true,
        gettingForumsError: null,
      });

    case GET_FORUMS_SUCCESS:
      return Object.assign({}, state, {
        gettingForums: false,
        forums: action.payload,
        gettingForumsError: null,
      });

    case GET_FORUMS_FAILURE:
      return Object.assign({}, state, {
        gettingForums: false,
        gettingForumsError: 'Unable to retrive forum list. Please try refreshing the browser.',
      });

    case GET_ALL_INFO_FAILURE:
      return Object.assign({}, state, {
        error: 'Something went wrong while loading admin level information.',
      });

    case CREATE_FORUM:
      return Object.assign({}, state, {
        creatingForumError: null,
        creatingForum: true,
      });

    case CREATE_FORUM_SUCCESS:
      return Object.assign({}, state, {
        creatingForum: false,
        creatingForumError: null,
      });

    case CREATE_FORUM_FAILURE:
      return Object.assign({}, state, {
        creatingForum: false,
        creatingForumError: 'Something was wrong while trying to create the forum. Please try again later.',
      });

    case DELETE_FORUM:
      return Object.assign({}, state, {
        deletingForum: true,
        deletingForumError: null,
      });

    case DELETE_FORUM_SUCCESS:
      return Object.assign({}, state, {
        deletingForum: false,
        deletingForumError: null,
      });

    case DELETE_FORUM_FAILURE:
      return Object.assign({}, state, {
        deletingForum: false,
        deletingForumError: 'Something was wrong while trying to delete the forum. Please try again later.',
      });

    default:
      return state;
  }
};
