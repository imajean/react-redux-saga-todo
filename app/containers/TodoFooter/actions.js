import { TODO_FOOTER_SET_FILTER, TODO_FOOTER_CLEAR_COMPLETED } from './constants';

export const setFilter = ({ route }) => ({
  type: TODO_FOOTER_SET_FILTER,
  payload: {
    route,
  },
});

export const clearCompleted = ({ ids }) => ({
  type: TODO_FOOTER_CLEAR_COMPLETED,
  payload: {
    ids,
  },
});
