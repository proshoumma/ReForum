import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import axios from 'axios';
import httpAdapter from 'axios/lib/adapters/http';
import * as actions from '../actions';
import * as constants from '../constants';

// configure axios
const host = 'http://localhost:8080';
axios.defaults.host = host;
axios.defaults.adapter = httpAdapter;

// configure the mock store
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

/**
 * testing getPinnedDiscussions action
 * @type {String}
 */
describe('getPinnedDiscussions', () => {
  afterEach(() => {
    // clean nock instances after each test
    nock.cleanAll();
  });

  it('should call FETCHING_PINNED_DISCUSSIONS_SUCCESS when fetching pinned discussion has been done', () => {
    // define a mock forumId
    const forumId = '1122334455';

    // intercept axios calls with nock
    nock(host)
      .get(`/api/forum/${forumId}/pinned_discussions`)
      .reply(200, {
        pinnedDiscussions: [],
      });

    // expected action list
    const expectedActions = [
      { type: constants.START_FETCHING_PINNED_DISCUSSIONS },
      {
        type: constants.FETCHING_PINNED_DISCUSSIONS_SUCCESS,
        payload: { pinnedDiscussions: [] },
      },
    ];

    // initialize store with empty object
    const store = mockStore({});

    // perform the test
    return store.dispatch(actions.getPinnedDiscussions(forumId, true)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

/**
 * test updateSortingMethod action
 * @type {String}
 */
describe('updateSortingMethod', () => {
  it('should update the sorting method', () => {
    const method = 'popularity';
    const expectedAction = {
      type: constants.UPDATE_SORTING_METHOD,
      payload: method,
    };

    expect(actions.updateSortingMethod(method)).toEqual(expectedAction);
  });
});
