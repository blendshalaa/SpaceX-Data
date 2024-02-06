// dragonsReducer.js

import * as actionTypes from '../actions/actionTypes';

const initialState = {
  dragons: [],
  loading: false,
  error: null,
};

const dragonsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_DRAGONS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case actionTypes.FETCH_DRAGONS_SUCCESS:
      return {
        ...state,
        loading: false,
        dragons: action.payload,
      };

    case actionTypes.FETCH_DRAGONS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default dragonsReducer;
