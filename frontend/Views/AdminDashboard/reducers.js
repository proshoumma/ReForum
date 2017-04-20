import {
  GET_ALL_INFO_START,
  GET_ALL_INFO_SUCCESS,
  GET_ALL_INFO_FAILURE,
} from './constants';

const initialState = {
  loadingInfo: false,
  info: null,
  error: null,
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

    case GET_ALL_INFO_FAILURE:
      return Object.assign({}, state, {
        error: 'Something went wrong while loading admin level information.',
      });

    default:
      return state;
  }
};
