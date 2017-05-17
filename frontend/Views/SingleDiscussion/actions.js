import {
  FETCHING_SINGLE_DISC_START,
  FETCHING_SINGLE_DISC_END,
  FETCHING_SINGLE_DISC_SUCCESS,
  FETCHING_SINGLE_DISC_FAILURE,
  TOGGLE_FAVORITE_START,
  TOGGLE_FAVORITE_SUCCESS,
  TOGGLE_FAVORITE_FAILURE,
  UPDATE_OPINION_CONTENT,
  POSTING_OPINION_START,
  POSTING_OPINION_SUCCESS,
  POSTING_OPINION_FAILURE,
  DELETE_DISC_START,
  DELETE_DISC_SUCCESS,
  DELETE_DISC_REDIRECT,
  DELETE_DISC_FAILURE,
  DELETE_OPINION_START,
  DELETE_OPINION_SUCCESS,
  DELETE_OPINION_FAILURE,
} from './constants';
import {
  fetchSingleDiscussion,
  fetchOpinions,
  toggleFavoriteApi,
  postOpinionApi,
  deletePostApi,
  deleteOpinionApi,
} from './api';

export const getDiscussion = (discussionSlug) => {
  return (dispatch, getState) => {
    dispatch({ type: FETCHING_SINGLE_DISC_START });
    fetchSingleDiscussion(discussionSlug).then(
      data => {
        if (data.data) dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data });
        else dispatch({ type: FETCHING_SINGLE_DISC_FAILURE });
      },
      error => dispatch({ type: FETCHING_SINGLE_DISC_FAILURE })
    );
  };
};

export const toggleFavorite = (discussionId) => {
  return (dispatch, getState) => {
    dispatch({ type: TOGGLE_FAVORITE_START });

    toggleFavoriteApi(discussionId).then(
      data => {
        if (data.data._id) {
          dispatch({ type: TOGGLE_FAVORITE_SUCCESS });
          dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data });
        }
        else dispatch({ type: TOGGLE_FAVORITE_FAILURE });
      },
      error => dispatch({ type: TOGGLE_FAVORITE_FAILURE })
    );
  };
};

export const updateOpinionContent = (value) => {
  return {
    type: UPDATE_OPINION_CONTENT,
    payload: value,
  };
};

export const postOpinion = (opinion, discussionSlug) => {
  return (dispatch, getState) => {
    dispatch({ type: POSTING_OPINION_START });

    if (!opinion.content || opinion.content.length < 20) {
      dispatch({ type: POSTING_OPINION_FAILURE, payload: 'Please provide a bit more info in your opinion....at least 20 characters.' });
    } else {
      postOpinionApi(opinion).then(
        data => {
          if (data.data._id) {
            // fetch the discussion to add the opinion
            fetchSingleDiscussion(discussionSlug).then(
              data => {
                dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data });
                dispatch({ type: POSTING_OPINION_SUCCESS });
              },
              error => dispatch({ type: FETCHING_SINGLE_DISC_FAILURE })
            );
          }
          else dispatch({ type: POSTING_OPINION_FAILURE });
        },
        error => dispatch({ type: POSTING_OPINION_FAILURE })
      );
    }
  };
};

export const deletePost = (discussionSlug) => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_DISC_START });
    deletePostApi(discussionSlug).then(
      data => {
        if (data.data.deleted) { dispatch({ type: DELETE_DISC_SUCCESS }); }
        else { dispatch({ type: DELETE_DISC_FAILURE }); }
      },
      error => dispatch({ type: DELETE_DISC_FAILURE })
    );
  };
};

export const deletedDiscussionRedirect = () => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_DISC_REDIRECT });
  };
};

export const deleteOpinion = (opinionId, discussionSlug) => {
  return (dispatch, getState) => {
    dispatch({ type: DELETE_OPINION_START, payload: opinionId });

    deleteOpinionApi(opinionId).then(
      data => {
        if (data.data.deleted) {

          // fetch the discussion again to refresh the opinions
          fetchSingleDiscussion(discussionSlug).then(
            data => {
              dispatch({ type: DELETE_OPINION_SUCCESS });
              dispatch({ type: FETCHING_SINGLE_DISC_SUCCESS, payload: data.data });
            },
            error => dispatch({ type: FETCHING_SINGLE_DISC_FAILURE })
          );

        }
        else { dispatch({ type: DELETE_OPINION_FAILURE }); }
      },
      error => dispatch({ type: DELETE_OPINION_FAILURE })
    );
  };
};
