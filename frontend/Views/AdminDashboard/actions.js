import {
  GET_ALL_INFO_START,
  GET_ALL_INFO_SUCCESS,
  GET_ALL_INFO_FAILURE,
} from './constants';

import { getAdminDashboardInfoAPI } from './api';

export const getAdminDashboardInfo = () => {
  return (dispatch, getState) => {
    dispatch({ type: GET_ALL_INFO_START });

    getAdminDashboardInfoAPI().then(
      data => dispatch({ type: GET_ALL_INFO_SUCCESS, payload: data.data }),
      error => dispatch({ type: FETCHING_DISCUSSIONS_FAILURE, payload: error })
    );
  };
};
