// @flow
import * as types from './actionTypes';

export const update = (title, sprintId) => ({
  type: types.UPDATE_TITLE,
  title,
  sprintId
});

export const updateTabName = (title, pointType, sprintId) => ({
  type: types.UPDATE_TAB_NAME,
  title,
  pointType,
  sprintId
});
