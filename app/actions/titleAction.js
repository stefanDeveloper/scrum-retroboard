// @flow
import * as types from './actionTypes';

export const update = title => ({
  type: types.UPDATE_TITLE,
  title
});

export function load(store) {
  return {
    type: types.LOAD,
    store
  };
}

export function newSprint() {
  return {
    type: types.NEW_SPRINT
  };
}
