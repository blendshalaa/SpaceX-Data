// dragonsActions.js

import DragonsServices from '../../services/dragonsServices.js';
import * as actionTypes from './types.js';

export const fetchDragonsRequest = () => ({
  type: actionTypes.FETCH_DRAGONS_REQUEST,
});

export const fetchDragonsSuccess = (dragons) => ({
  type: actionTypes.FETCH_DRAGONS_SUCCESS,
  payload: dragons,
});

export const fetchDragonsFailure = (error) => ({
  type: actionTypes.FETCH_DRAGONS_FAILURE,
  payload: error,
});

export const fetchDragons = () => {
  return async (dispatch) => {
    dispatch(fetchDragonsRequest());

    try {
      const response = await DragonsServices.fetchDragons();
      dispatch(fetchDragonsSuccess(response.data));
    } catch (error) {
      dispatch(fetchDragonsFailure(error.message));
    }
  };
};
