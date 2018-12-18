import type { Dispatch as ReduxDispatch, Store as ReduxStore } from 'redux';

export type pointStateType = {
  +point: Array
};

export type Action = {
  +type: string
};

export type GetState = () => pointStateType;

export type Dispatch = ReduxDispatch<Action>;

export type Store = ReduxStore<GetState, Action>;
