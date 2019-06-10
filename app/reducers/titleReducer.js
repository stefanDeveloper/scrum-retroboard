// @flow
import * as types from '../actions/actionTypes';

import type { Action } from './types';

const title = (state: object, action: Action) => {
  const sprintMap = new Map(state.sprints.map(el => [el.id, el]));
  const currentSprints = Object.assign([], state.sprints);
  const newSprint = sprintMap.get(action.sprintId);
  switch (action.type) {
    case types.UPDATE_TITLE:
      newSprint.title.name = action.title;
      return {
        ...state,
        sprints: currentSprints
      };
    case types.UPDATE_TAB_NAME:
      newSprint.title[action.pointType] = action.title;
      return {
        ...state,
        sprints: currentSprints
      };
    default:
      return state;
  }
};

export default title;
