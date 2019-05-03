// @flow
import * as types from '../actions/actionTypes';
import initialState from '../constants/initialState';
import type { Action } from './types';

const title = (state: object = initialState.points, action: Action) => {
  switch (action.type) {
    case types.UPDATE_TITLE:
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};

export default title;
