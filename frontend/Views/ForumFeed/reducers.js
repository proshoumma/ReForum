import {
  START_FETCHING_FEED,
  STOP_FETCHING_FEED,
  FETCHING_FEED_SUCCESS,
  FETCHING_FEED_FAILURE,
} from './constants';

const initialState = {
  fetchingFeed: false,
  feeds: null,
  error: null,
};

export const feedReducer = (state = initialState, action) => {
  switch(action.type) {
    case START_FETCHING_FEED:
      return Object.assign({}, state, {
        fetchingFeed: true,
      });;

    case STOP_FETCHING_FEED:
      return Object.assign({}, state, {
        fetchingFeed: false,
      });;

    case FETCHING_FEED_SUCCESS:
      return Object.assign({}, state, {
        feeds: action.payload,
        fetchingFeed: false,
        error: null,
      });

    case FETCHING_FEED_FAILURE:
      return Object.assign({}, state, {
        fetchingFeed: false,
        error: 'Unable to fetch feeds',
      });

    default:
      return state;
  }
};
