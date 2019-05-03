// @flow
import * as types from './actionTypes';

// eslint-disable-next-line import/prefer-default-export
export const update = title => ({
  type: types.UPDATE_TITLE,
  title
});
