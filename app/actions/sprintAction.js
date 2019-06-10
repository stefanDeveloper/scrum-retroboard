// @flow
import * as types from './actionTypes';

export const add = () => ({
  type: types.ADD_SPRINT
});

export const remove = sprint => ({
  type: types.DELETE_SPRINT,
  sprint
});

export const load = store => ({
  type: types.LOAD,
  store
});
