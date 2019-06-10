// @flow
import * as types from '../actions/actionTypes';

import type { Action } from './types';

const image = (state: object, action: Action) => {
  const sprintMap = new Map(state.sprints.map(el => [el.id, el]));
  const currentSprint = Object.assign([], state.sprints);
  const newSprint = Object.assign([], sprintMap.get(action.sprintId));
  switch (action.type) {
    case types.UPDATE_IMAGE:
      newSprint.image[action.pointType].url = URL.createObjectURL(action.image);
      return {
        ...state,
        sprints: currentSprint
      };
    case types.DELETE_IMAGE:
      newSprint.image[action.pointType].url = '';
      return {
        ...state,
        sprints: currentSprint
      };
    case types.SET_SCALE:
      newSprint.image[action.pointType].scale = action.scale;
      return {
        ...state,
        sprints: currentSprint
      };
    default:
      return state;
  }
};

export default image;
