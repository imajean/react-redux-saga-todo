import { guid } from './utils';
import {
  TODO_ADD,
  TODO_REMOVE,
  TODO_TOGGLE,
  TODO_EDIT,
} from './constants';

export const todoAdd = (payload) => ({
  type: TODO_ADD,
  payload: {
    ...payload,
    id: guid(),
  },
});

export const todoRemove = ({ ids }) => ({
  type: TODO_REMOVE,
  payload: {
    ids,
  },
});

export const todoToggle = (payload) => ({
  type: TODO_TOGGLE,
  payload,
});

export const todoEdit = (payload) => ({
  type: TODO_EDIT,
  payload,
});
