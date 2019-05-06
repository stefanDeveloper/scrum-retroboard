// @flow
import * as types from '../actions/actionTypes';
import initialState from '../constants/initialState';
import type { Action } from './types';

const title = (state: object = initialState.title, action: Action) => {
  switch (action.type) {
    case types.UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      };
    case types.LOAD:
      return action.state.titleReducer;
    case types.NEW_SPRINT:
      return initialState.title;
    default:
      return state;
  }
};

export default title;
