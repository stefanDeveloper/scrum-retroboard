// @flow
import * as types from './actionTypes';

export const add = () => ({
  type: types.ADD_SPRINT
});

export const remove = sprint => ({
  type: types.DELETE_SPRINT,
  sprint
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
