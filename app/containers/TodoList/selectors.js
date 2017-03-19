import { createSelector } from 'reselect';
import { getTodos } from 'containers/Todos/selectors';

const getActiveFilter = (state, { activeFilter }) => activeFilter;

const isValidTodo = (completed) => (todo) => todo.get('completed') === completed;

export default () => createSelector(
  getTodos, getActiveFilter,
  (todos, activeFilter) => {
    if (!activeFilter) {
      return { todos };
    }

    const isCompleted = activeFilter === 'completed';
    const todoValidator = isValidTodo(isCompleted);

    return { todos: todos.filter(todoValidator) };
  },
);
