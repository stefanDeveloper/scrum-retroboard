// @flow
import * as types from '../actions/actionTypes';
import initialState from '../constants/initialState';
import type { Action } from './types';

const title = (state: object = initialState.image, action: Action) => {
  switch (action.type) {
    case types.UPDATE_IMAGE:
      return {
        ...state,
        [`image-${action.pointType}`]: URL.createObjectURL(action.image)
      };
    case types.DELETE_IMAGE:
      return {
        ...state,
        [`image-${action.pointType}`]: ''
      };
    case types.LOAD:
      return action.state.imageReducer;
    case types.NEW_SPRINT:
      return initialState.image;
    default:
      return state;
  }
};

export default title;
