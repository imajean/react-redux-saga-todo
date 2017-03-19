import { List } from 'immutable';
import {
  TODO_ADD,
  TODO_REMOVE,
  TODO_TOGGLE,
  TODO_EDIT,
} from './constants';
import TodoRecord from './record';

const initialState = new List([]);

const isTodoIndex = (id) => (value) => value.get('id') === id;

const getTodoIndex = (state, id) => state.findIndex(isTodoIndex(id));

export default function (state = initialState, action) {
  switch (action.type) {
    case TODO_ADD: {
      return state.push(new TodoRecord(action.payload));
    }
    case TODO_TOGGLE: {
      const { id, completed } = action.payload;
      const todoIndex = getTodoIndex(state, id);
      return state.setIn([todoIndex, 'completed'], !completed);
    }
    case TODO_REMOVE: {
      const { ids } = action.payload;
      // const todoIndex = getTodoIndex(state, id);

      return ids.reduce((reduction, value) => {
        const todoIndex = getTodoIndex(reduction, value);
        return reduction.delete(todoIndex);
      }, state);

      // return state.delete(todoIndex);
    }
    case TODO_EDIT: {
      const { id, text } = action.payload;
      const todoIndex = getTodoIndex(state, id);
      return state.setIn([todoIndex, 'text'], text);
    }
    default: {
      return state;
    }
  }
}
