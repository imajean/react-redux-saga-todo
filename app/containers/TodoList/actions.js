import {
  TODO_LIST_TOGGLE,
  TODO_LIST_REMOVE,
  TODO_LIST_EDIT,
} from './constants';

export const todoListRemove = ({ ids }) => ({
  type: TODO_LIST_REMOVE,
  payload: {
    ids,
  },
});

export const todoListToggle = ({ id, text, completed }) => ({
  type: TODO_LIST_TOGGLE,
  payload: {
    id,
    text,
    completed,
  },
});

export const todoListEdit = ({ id, text }) => ({
  type: TODO_LIST_EDIT,
  payload: {
    id,
    text,
  },
});
